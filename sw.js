* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f7fb;
  --card: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --danger: #dc2626;
  --bubble-user: #2563eb;
  --bubble-assistant: #ffffff;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 10px 14px;
  background: var(--primary);
  color: #fff;
  font-weight: 650;
  cursor: pointer;
}

button:hover {
  background: var(--primary-hover);
}

button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

button.secondary,
button.ghost {
  background: #fff;
  color: var(--text);
  border: 1px solid var(--line);
}

button.secondary:hover,
button.ghost:hover {
  background: #f3f4f6;
}

button.danger {
  background: #fff;
  color: var(--danger);
  border: 1px solid #fecaca;
}

button.danger:hover {
  background: #fff1f2;
}

.icon-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  background: #fff;
  color: var(--muted);
  border: 1px solid var(--line);
}

.app {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 14px 22px;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.topbar h1 {
  margin: 0;
  font-size: 22px;
}

.topbar p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.top-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.layout {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 18px;
  flex: 1;
  min-height: 0;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.panel {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.04);
}

.panel h2,
.panel h3 {
  margin: 0 0 10px;
}

.panel p {
  margin: 8px 0;
  color: var(--muted);
  line-height: 1.55;
}

.panel.small {
  font-size: 14px;
}

.chat-area {
  min-height: calc(100dvh - 110px);
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 12px 34px rgba(17, 24, 39, 0.06);
}

.chat {
  flex: 1;
  overflow-y: auto;
  padding: 22px;
}

.empty {
  max-width: 620px;
  margin: 12vh auto 0;
  text-align: center;
  color: var(--muted);
  line-height: 1.7;
}

.message-row {
  display: flex;
  margin: 12px 0;
}

.message-row.user {
  justify-content: flex-end;
}

.message-row.assistant {
  justify-content: flex-start;
}

.bubble {
  max-width: min(720px, 86%);
  padding: 13px 15px;
  border-radius: 18px;
  line-height: 1.65;
  white-space: pre-wrap;
  word-break: break-word;
  border: 1px solid var(--line);
}

.message-row.user .bubble {
  background: var(--bubble-user);
  color: #fff;
  border-color: var(--bubble-user);
  border-bottom-right-radius: 6px;
}

.message-row.assistant .bubble {
  background: var(--bubble-assistant);
  color: var(--text);
  border-bottom-left-radius: 6px;
}

.note {
  margin: 14px auto;
  width: fit-content;
  max-width: 88%;
  padding: 9px 12px;
  background: #f3f4f6;
  color: var(--muted);
  border-radius: 999px;
  font-size: 13px;
}

.composer {
  padding: 14px;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  align-items: end;
  background: #fff;
}

textarea,
input,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 11px 12px;
  background: #fff;
  color: var(--text);
  outline: none;
}

textarea:focus,
input:focus,
select:focus {
  border-color: #93c5fd;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

#userInput {
  resize: none;
  min-height: 46px;
  max-height: 180px;
}

dialog {
  border: 0;
  padding: 0;
  border-radius: 22px;
  width: min(94vw, 560px);
  box-shadow: 0 24px 90px rgba(17, 24, 39, 0.22);
}

dialog::backdrop {
  background: rgba(17, 24, 39, 0.35);
}

.dialog-card {
  padding: 18px;
  background: #fff;
}

.dialog-card.wide {
  width: min(94vw, 760px);
}

.dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.dialog-head h2 {
  margin: 0;
}

.dialog-card label {
  display: block;
  margin: 12px 0;
  color: #374151;
  font-weight: 650;
}

.dialog-card label input,
.dialog-card label textarea,
.dialog-card label select {
  margin-top: 7px;
  font-weight: 400;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.check {
  display: flex !important;
  gap: 10px;
  align-items: center;
}

.check input {
  width: auto;
  margin: 0;
}

.dialog-actions {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 10px;
  margin-top: 14px;
}

@media (max-width: 820px) {
  .topbar {
    align-items: flex-start;
    padding: 12px;
  }

  .layout {
    grid-template-columns: 1fr;
    padding: 12px;
  }

  .side {
    display: none;
  }

  .chat-area {
    min-height: calc(100dvh - 86px);
    border-radius: 18px;
  }

  .composer {
    grid-template-columns: 1fr;
  }

  .composer button {
    width: 100%;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .dialog-actions {
    grid-template-columns: 1fr;
  }

  .dialog-actions span {
    display: none;
  }
}
