// Versão base 0.1.0
const elCount = document.getElementById("count");
const elIncrement = document.getElementById("btn-increment");
const elDecrement = document.getElementById("btn-decrement");
const elToggleTheme = document.getElementById("btn-toggle-theme");
const elTitle = document.getElementById("title");

function setCount(newValue) {
  elCount.textContent = String(newValue);
}

let state = { count: 0, dark: false };

elIncrement.addEventListener("click", () => {
  state.count += 2;
  setCount(state.count);
});

elDecrement.addEventListener("click", () => {
  state.count -= 2;
  setCount(state.count);
});

elToggleTheme.addEventListener("click", () => {
  state.dark = !state.dark;

  // 1. Cores principais da página
  document.documentElement.style.setProperty("--bg", state.dark ? "#0b1220" : "#f8fafc");
  document.documentElement.style.setProperty("--text", state.dark ? "#e2e8f0" : "#0f172a");
  
  // 2. Cores de componentes adicionais (ex: cards, botões, bordas)
  document.documentElement.style.setProperty("--card-bg", state.dark ? "#1e293b" : "#ffffff");
  document.documentElement.style.setProperty("--border-color", state.dark ? "#334155" : "#cbd5e1");

  // 3. Modificações diretas em elementos específicos (se necessário)
  // Exemplo: alterando múltiplos elementos da UI
  elTitle.textContent = state.dark ? "Mini App – Modo Escuro" : "Mini App – GitFlow";
  elToggleTheme.setAttribute("aria-pressed", String(state.dark));
  
  // Se houver mais elementos que mudam de classe ou estilo direto:
  // document.querySelectorAll('.card').forEach(card => {
  //   card.style.backgroundColor = state.dark ? "#1e293b" : "#ffffff";
  // });
});