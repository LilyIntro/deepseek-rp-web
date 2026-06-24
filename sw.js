:root {
  --bg: #120d19;
  --panel: rgba(31, 22, 43, 0.72);
  --panel-strong: rgba(41, 29, 55, 0.92);
  --line: rgba(255, 233, 201, 0.14);
  --text: #fff6ec;
  --muted: #cdbfd7;
  --soft: #a88cb8;
  --accent: #f7c77d;
  --accent-2: #ff86b7;
  --accent-3: #8bd3ff;
  --danger: #ff7788;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.46);
  --radius: 28px;
  --safe-top: env(safe-area-inset-top);
  --safe-bottom: env(safe-area-inset-bottom);
}

* { box-sizing: border-box; }

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(255, 134, 183, 0.25), transparent 34rem),
    radial-gradient(circle at bottom right, rgba(139, 211, 255, 0.18), transparent 32rem),
    linear-gradient(135deg, #110d18 0%, #211129 44%, #0f1829 100%);
  overflow: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 80%);
}

button,
input,
textarea,
select { font: inherit; }

button { cursor: pointer; }

.ambient {
  position: fixed;
  width: 28rem;
  height: 28rem;
  border-radius: 999px;
  filter: blur(74px);
  opacity: 0.54;
  pointer-events: none;
}

.ambient-one {
  left: -8rem;
  top: -8rem;
  background: rgba(255, 134, 183, 0.48);
}

.ambient-two {
  right: -8rem;
  bottom: -8rem;
  background: rgba(90, 170, 255, 0.38);
}

.app-shell {
  width: min(1180px, calc(100vw - 28px));
  height: calc(100dvh - 28px);
  margin: 14px auto;
  padding: 14px;
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  gap: 14px;
  border: 1px solid var(--line);
  border-radius: calc(var(--radius) + 8px);
  background: rgba(255, 255, 255, 0.045);
  box-shadow: var(--shadow);
  backdrop-filter: blur(26px);
}

.side-panel,
.chat-panel {
  min-height: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(16, 12, 23, 0.54);
  backdrop-filter: blur(22px);
}

.side-panel {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: auto;
}

.brand-card,
.profile-card,
.tips-card {
  border: 1px solid var(--line);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
  box-shadow: 0 12px 34px rgba(0,0,0,0.20);
}

.brand-card {
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 16px;
}

.brand-mark,
.avatar {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background:
    radial-gradient(circle at 28% 22%, #fff5d0, transparent 23%),
    linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #281128;
  font-weight: 900;
  box-shadow: 0 12px 30px rgba(247, 199, 125, 0.28);
}

.brand-mark {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  font-size: 25px;
}

.brand-card h1,
.profile-card h2,
.mobile-topbar h2 {
  margin: 0;
  line-height: 1.08;
}

.brand-card h1 { font-size: 26px; letter-spacing: -0.03em; }
.profile-card h2 { font-size: 18px; }
.mobile-topbar h2 { font-size: 18px; }

.eyebrow {
  margin: 0 0 5px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.status-pill {
  display: inline-flex;
  max-width: 230px;
  margin: 7px 0 0;
  padding: 6px 9px;
  border: 1px solid rgba(247, 199, 125, 0.25);
  border-radius: 999px;
  color: #ffe7ba;
  background: rgba(247, 199, 125, 0.10);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-card { padding: 16px; }

.profile-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 58px;
  height: 58px;
  border-radius: 22px;
  font-size: 22px;
}

.scene-preview,
.tips-card p:not(.eyebrow) {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.75;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.soft-button,
.icon-button,
.mini-button,
.send-button,
.panel-form menu button {
  border: 0;
  color: var(--text);
  font-weight: 800;
  transition: transform 0.16s ease, opacity 0.16s ease, background 0.16s ease;
}

.soft-button:hover,
.icon-button:hover,
.mini-button:hover,
.send-button:hover,
.panel-form menu button:hover { transform: translateY(-1px); }

.soft-button {
  min-height: 48px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.075);
}

.soft-button.danger { color: #ffd1d8; }

.tips-card { padding: 15px; margin-top: auto; }

.chat-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.mobile-topbar {
  display: none;
  padding: calc(14px + var(--safe-top)) 14px 12px;
  border-bottom: 1px solid var(--line);
  background: rgba(20, 14, 28, 0.70);
}

.mobile-actions { display: flex; gap: 8px; }

.icon-button {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
}

.chat {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 22px 12px;
  scroll-behavior: smooth;
}

.chat::-webkit-scrollbar,
.side-panel::-webkit-scrollbar { width: 9px; }
.chat::-webkit-scrollbar-thumb,
.side-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.13); border-radius: 999px; }

.empty {
  min-height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 28px;
}

.empty-inner {
  max-width: 560px;
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 30px;
  background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035));
}

.empty h2 {
  margin: 0 0 10px;
  font-size: clamp(26px, 5vw, 44px);
  letter-spacing: -0.05em;
}

.empty p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.message-row {
  display: flex;
  margin: 13px 0;
  animation: rise 0.22s ease both;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.message {
  max-width: min(78%, 760px);
  padding: 14px 16px;
  border: 1px solid var(--line);
  line-height: 1.78;
  white-space: pre-wrap;
  word-wrap: break-word;
  box-shadow: 0 10px 28px rgba(0,0,0,0.18);
}

.message-row.user { justify-content: flex-end; }
.message-row.user .message {
  border-radius: 22px 22px 7px 22px;
  background: linear-gradient(135deg, rgba(255, 134, 183, 0.93), rgba(247, 199, 125, 0.88));
  color: #2b1224;
  border-color: rgba(255, 255, 255, 0.22);
}

.message-row.assistant { justify-content: flex-start; }
.message-row.assistant .message {
  border-radius: 22px 22px 22px 7px;
  background: rgba(255, 255, 255, 0.075);
  color: var(--text);
}

.system-note {
  width: fit-content;
  max-width: 90%;
  margin: 12px auto;
  padding: 8px 13px;
  border: 1px solid rgba(247, 199, 125, 0.21);
  border-radius: 999px;
  color: #ffe7ba;
  background: rgba(247, 199, 125, 0.09);
  font-size: 13px;
}

.composer {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 14px;
  padding-bottom: calc(14px + var(--safe-bottom));
  border-top: 1px solid var(--line);
  background: rgba(18, 13, 25, 0.75);
  backdrop-filter: blur(24px);
}

.composer textarea {
  flex: 1;
  min-height: 48px;
  max-height: 180px;
  resize: none;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 13px 14px;
  color: var(--text);
  outline: none;
  background: rgba(255, 255, 255, 0.08);
}

.composer textarea::placeholder,
.panel-form input::placeholder,
.panel-form textarea::placeholder { color: rgba(255, 246, 236, 0.45); }

.mini-button {
  height: 48px;
  padding: 0 15px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--line);
}

.send-button,
.panel-form menu button:not(.secondary) {
  height: 48px;
  padding: 0 18px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #2b1224;
  box-shadow: 0 12px 28px rgba(255, 134, 183, 0.22);
}

button:disabled { opacity: 0.55; cursor: not-allowed; }
button:disabled:hover { transform: none; }

.dialog {
  width: min(94vw, 560px);
  max-height: min(86dvh, 820px);
  overflow: auto;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 0;
  color: var(--text);
  background: rgba(25, 18, 34, 0.96);
  box-shadow: var(--shadow);
  backdrop-filter: blur(26px);
}

.large-dialog { width: min(94vw, 760px); }
.dialog::backdrop { background: rgba(0, 0, 0, 0.58); backdrop-filter: blur(8px); }

.panel-form { padding: 20px; }

.dialog-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 12px;
}

.dialog-title h2 { margin: 0; font-size: 24px; }

.round-close {
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--text);
  background: rgba(255,255,255,0.075);
  font-size: 22px;
}

.hint {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.65;
}

.panel-form label {
  display: block;
  margin: 13px 0;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

.panel-form input,
.panel-form textarea,
.panel-form select {
  width: 100%;
  margin-top: 7px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 13px;
  color: var(--text);
  outline: none;
  background: rgba(255, 255, 255, 0.075);
}

.panel-form textarea { resize: vertical; line-height: 1.7; }
.panel-form select option { background: #21142c; color: var(--text); }

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.toggle-line {
  min-height: 72px;
  display: flex !important;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 13px;
  background: rgba(255,255,255,0.055);
}

.toggle-line input { width: auto; margin: 0; }

.panel-form menu {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 8px 0 0;
  margin: 0;
}

.panel-form menu button {
  min-width: 96px;
  border-radius: 16px;
  height: 44px;
  padding: 0 16px;
}

.panel-form menu .secondary {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.08);
}

@media (max-width: 860px) {
  html,
  body { overflow: hidden; }

  .app-shell {
    width: 100vw;
    height: 100dvh;
    margin: 0;
    padding: 0;
    display: block;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .side-panel { display: none; }

  .chat-panel {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    background: rgba(16, 12, 23, 0.40);
  }

  .mobile-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat { padding: 16px 12px 8px; }
  .message { max-width: 90%; font-size: 15px; }
  .composer { padding: 10px; padding-bottom: calc(10px + var(--safe-bottom)); }
  .mini-button { display: none; }
  .send-button { padding-inline: 15px; }
  .form-grid { grid-template-columns: 1fr; gap: 0; }
  .dialog { border-radius: 24px 24px 0 0; width: 100vw; max-height: 88dvh; margin: auto 0 0; }
  .panel-form { padding: 18px; }
}
