Mudanças 
- Cor: Vermelha
- Ttitulo: Equipe B e Modo Escuro
- Lógica: Toggheter
- Incremento: de 2 em 2
- Nome da função: updateCount

# Registro de Decisões de Merge e Conflitos

## 1. Conflitos nas Features Paralelas (`feature/incremento-rename` vs `feature/tema-ajustavel`)
Durante o merge das branches paralelas para a branch `develop`, ocorreram conflitos nos arquivos `index.html`, `style.css` e `app.js`.

### Decisões Tomadas:
- **`app.js`**: Mantivemos a função de incremento de 2 em 2 (`state.count += 2`), renomeamos a função para `updateCount` e combinamos a lógica do botão de alternar tema.
- **`style.css`**: Optamos pela cor primária vermelha (`#eb1e1e`) e mantivemos o suporte às variáveis de tema no `:root`.
- **`index.html`**: Durante o merge em develop, foram mantidos acidentalmente dois títulos (`<h1>`), o que gerou duplicidade na renderização da interface.

---

## 2. Resolução no Hotfix (`hotfix/titulo-claro`)
Identificado o bug de duplicidade de título e falha na alternância do tema no modo claro:
- Unificamos a estrutura do `index.html` para conter apenas um elemento `<h1 id="title">Mini App – GitFlow</h1>`.
- Ajustamos o `app.js` para atualizar dinamicamente o título entre `"Mini App – GitFlow"` (modo claro) e `"Mini App – Modo Escuro"` (modo escuro).
- Limpamos a versão no rodapé mantendo estritamente a indicação `Versão 1.0.0`.
- O hotfix foi integrado diretamente na branch `main` e devidamente sincronizado de volta com a branch `develop`.