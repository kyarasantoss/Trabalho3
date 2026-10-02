// Versão 1.0.0 (Hotfix)
const elCount = document.getElementById("count");
const elIncrement = document.getElementById("btn-increment");
const elDecrement = document.getElementById("btn-decrement");
const elToggleTheme = document.getElementById("btn-toggle-theme");
const elTitle = document.getElementById("title");

function updateCount(newValue) {
  if (elCount) {
    elCount.textContent = String(newValue);
  }
}

let state = { count: 0, dark: false };

// Incrementa de 2 em 2
if (elIncrement) {
  elIncrement.addEventListener("click", () => {
    state.count += 2;
    updateCount(state.count);
  });
}

// Decrementa de 2 em 2
if (elDecrement) {
  elDecrement.addEventListener("click", () => {
    state.count -= 2;
    updateCount(state.count);
  });
}

// Alterna tema e corrige o título
if (elToggleTheme) {
  elToggleTheme.addEventListener("click", () => {
    state.dark = !state.dark;

    // 1. Alterna variáveis CSS
    document.documentElement.style.setProperty("--bg", state.dark ? "#0b1220" : "#f8fafc");
    document.documentElement.style.setProperty("--text", state.dark ? "#e2e8f0" : "#0f172a");
    document.documentElement.style.setProperty("--card", state.dark ? "#1e293b" : "#ffffff");
    document.documentElement.style.setProperty("--border", state.dark ? "#334155" : "#e5e7eb");

    // 2. Garante o título correto dependendo do estado
    if (elTitle) {
      elTitle.textContent = state.dark ? "Mini App – Modo Escuro" : "Mini App – GitFlow";
    }

    elToggleTheme.setAttribute("aria-pressed", String(state.dark));
  });
}