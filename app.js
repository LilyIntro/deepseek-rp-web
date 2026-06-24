const DEFAULTS = {
  workerUrl: "https://deepseek-proxy.marea-deepseek-web.workers.dev/chat",
  model: "deepseek-v4-flash",
  systemPrompt: "你是一个简洁、准确、友好的中文助手。",
  thinkingMode: false,
};

const $ = (selector) => document.querySelector(selector);

const chatEl = $("#chat");
const composer = $("#composer");
const userInput = $("#userInput");
const sendBtn = $("#sendBtn");
const clearBtn = $("#clearBtn");
const settingsBtn = $("#settingsBtn");
const statusText = $("#statusText");

const settingsDialog = $("#settingsDialog");
const cancelSettings = $("#cancelSettings");
const saveSettings = $("#saveSettings");
const workerUrlInput = $("#workerUrl");
const appTokenInput = $("#appToken");
const modelSelect = $("#modelSelect");
const systemPromptInput = $("#systemPrompt");
const thinkingModeInput = $("#thinkingMode");

let messages = JSON.parse(localStorage.getItem("ds_messages") || "[]");

function getSettings() {
  return {
    workerUrl: localStorage.getItem("ds_worker_url") || DEFAULTS.workerUrl,
    appToken: localStorage.getItem("ds_app_token") || "",
    model: localStorage.getItem("ds_model") || DEFAULTS.model,
    systemPrompt: localStorage.getItem("ds_system_prompt") || DEFAULTS.systemPrompt,
    thinkingMode: localStorage.getItem("ds_thinking_mode") === "true",
  };
}

function setSettings(next) {
  localStorage.setItem("ds_worker_url", next.workerUrl.trim());
  localStorage.setItem("ds_app_token", next.appToken.trim());
  localStorage.setItem("ds_model", next.model);
  localStorage.setItem("ds_system_prompt", next.systemPrompt.trim() || DEFAULTS.systemPrompt);
  localStorage.setItem("ds_thinking_mode", String(next.thinkingMode));
  updateStatus();
}

function updateStatus() {
  const s = getSettings();
  const hasWorker = s.workerUrl && !s.workerUrl.includes("YOUR-WORKER-NAME");
  const hasToken = Boolean(s.appToken);
  if (hasWorker && hasToken) {
    statusText.textContent = `${s.model} · 已配置`;
  } else if (hasWorker) {
    statusText.textContent = `${s.model} · 需要 APP_TOKEN`;
  } else {
    statusText.textContent = "需要设置 Worker 地址";
  }
}

function persistMessages() {
  localStorage.setItem("ds_messages", JSON.stringify(messages.slice(-80)));
}

function escapeForText(content) {
  return typeof content === "string" ? content : String(content ?? "");
}

function addMessage(role, content) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;
  const bubble = document.createElement("div");
  bubble.className = "message";
  bubble.textContent = escapeForText(content);
  row.appendChild(bubble);
  chatEl.appendChild(row);
  chatEl.scrollTop = chatEl.scrollHeight;
  return row;
}

function addNote(content) {
  const note = document.createElement("div");
  note.className = "system-note";
  note.textContent = content;
  chatEl.appendChild(note);
  chatEl.scrollTop = chatEl.scrollHeight;
  return note;
}

function render() {
  chatEl.innerHTML = "";
  if (messages.length === 0) {
    const empty = document.createElement("section");
    empty.className = "empty";
    empty.innerHTML = `
      <h2>你的 DeepSeek 网页版</h2>
      <p>第一次使用：点右上角「设置」，填入 Cloudflare Worker 接口地址和 APP_TOKEN。网页可以部署在 GitHub Pages，也可以添加到 iPhone 主屏幕。</p>
    `;
    chatEl.appendChild(empty);
    return;
  }

  for (const msg of messages) {
    addMessage(msg.role, msg.content);
  }
}

function fillSettingsDialog() {
  const s = getSettings();
  workerUrlInput.value = s.workerUrl;
  appTokenInput.value = s.appToken;
  modelSelect.value = s.model;
  systemPromptInput.value = s.systemPrompt;
  thinkingModeInput.checked = s.thinkingMode;
}

async function callWorker(userText) {
  const s = getSettings();

  if (!s.workerUrl || s.workerUrl.includes("YOUR-WORKER-NAME")) {
    throw new Error("请先在设置里填写你的 Cloudflare Worker 接口地址。格式类似：https://xxx.workers.dev/chat");
  }
  if (!s.appToken) {
    throw new Error("请先在设置里填写 APP_TOKEN。这个不是 DeepSeek API Key，而是你自己设置的访问密码。");
  }

  const requestMessages = [
    { role: "system", content: s.systemPrompt },
    ...messages.slice(-30),
    { role: "user", content: userText },
  ];

  const response = await fetch(s.workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-App-Token": s.appToken,
    },
    body: JSON.stringify({
      model: s.model,
      messages: requestMessages,
      temperature: 0.7,
      max_tokens: 2500,
      thinking: s.thinkingMode,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = typeof data.detail === "string" ? data.detail : "";
    throw new Error(data.error || detail || `请求失败：HTTP ${response.status}`);
  }

  return data.choices?.[0]?.message?.content || "没有收到有效回复。";
}

composer.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = "";
  userInput.style.height = "auto";
  sendBtn.disabled = true;

  messages.push({ role: "user", content: text });
  persistMessages();
  render();

  const note = addNote("正在思考…");

  try {
    const reply = await callWorker(text);
    note.remove();
    messages.push({ role: "assistant", content: reply });
    persistMessages();
    render();
  } catch (error) {
    note.textContent = `错误：${error.message}`;
    if (String(error.message).includes("设置")) {
      fillSettingsDialog();
      settingsDialog.showModal();
    }
  } finally {
    sendBtn.disabled = false;
    userInput.focus();
  }
});

userInput.addEventListener("input", () => {
  userInput.style.height = "auto";
  userInput.style.height = `${Math.min(userInput.scrollHeight, 180)}px`;
});

settingsBtn.addEventListener("click", () => {
  fillSettingsDialog();
  settingsDialog.showModal();
});

cancelSettings.addEventListener("click", () => settingsDialog.close());

saveSettings.addEventListener("click", () => {
  setSettings({
    workerUrl: workerUrlInput.value,
    appToken: appTokenInput.value,
    model: modelSelect.value,
    systemPrompt: systemPromptInput.value,
    thinkingMode: thinkingModeInput.checked,
  });
});

clearBtn.addEventListener("click", () => {
  const ok = confirm("确定清空本机保存的对话吗？");
  if (!ok) return;
  messages = [];
  persistMessages();
  render();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

updateStatus();
render();
