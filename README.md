# Career Dreamer — Mapeamento Vocacional

Página web em que estudantes informam nome, hobbies e interesses. Os dados são
enviados para uma API com IA, que devolve um perfil profissional em JSON, exibido
na página de resultado.

Tecnologias: **HTML5, CSS3 e JavaScript (ES6) puro**, sem frameworks.

## Sua missão

O cliente encontrou vários problemas. Eles estão descritos em **`ISSUES.md`**.
Resolva cada issue e registre o que fez (um commit por issue é uma ótima prática):

```
git commit -m "fix #02: campo nome aceita texto e tem validação"
```

## Como rodar

Não precisa instalar nada.

- **Opção 1:** abra o arquivo `index.html` no navegador (duplo clique).
- **Opção 2 (recomendada):** no VS Code, instale a extensão **Live Server**,
  clique com o botão direito em `index.html` → *Open with Live Server*.
  A página recarrega sozinha a cada vez que você salva.

Para testar a página de resultado **sem o backend**, abra `resultado.html?exemplo`
(ou clique em "Ver um resultado de exemplo" no rodapé).

## Estrutura

```
versao-alunos/
├── index.html          → formulário
├── resultado.html      → página de resultado
├── css/
│   └── style.css       → todos os estilos
├── js/
│   ├── config.js       → endereço da API (cada grupo preenche o seu)
│   ├── app.js          → lógica do formulário
│   ├── resultado.js    → lógica da página de resultado
│   └── dados-exemplo.js→ resposta de exemplo para testes
├── ISSUES.md           → reclamações do cliente
└── README.md
```

## Configurando a API

Abra `js/config.js` e preencha o endereço **completo** do endpoint:

```js
const CONFIG = Object.freeze({
  API_URL: 'http://127.0.0.1:8000/api/career-match',
  // ...
});
```

Enquanto `API_URL` estiver vazio (`''`), o site deve mostrar o modal "Tente mais tarde".

## Contrato da API

**Requisição** — `POST` para `CONFIG.API_URL`, cabeçalho `Content-Type: application/json`:

```json
{
  "name": "Ana Maria Clara",
  "hobbies": ["dançar", "cantar", "organizar maratonas de programação"],
  "interests": ["design de jogos", "desenvolvimento de pessoas", "planejar documentos"]
}
```

**Resposta de sucesso** — status `200`:

```json
{
  "user_name": "Ana Maria Clara",
  "career_identity_statement": "Texto curto que resume o perfil da pessoa.",
  "recommended_careers": [
    {
      "id": "ux-ui-designer",
      "title": "Designer de UX/UI",
      "match_score": 92,
      "summary": "O que essa profissão faz, em uma ou duas frases.",
      "key_skills": ["Figma", "Pesquisa com usuários"],
      "learning_path": ["Passo 1", "Passo 2", "Passo 3"]
    }
  ]
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `user_name` | texto | Nome da pessoa |
| `career_identity_statement` | texto | Síntese do perfil |
| `recommended_careers` | lista | Carreiras recomendadas |
| `match_score` | número 0–100 | Compatibilidade em % |
| `key_skills` | lista de textos | Competências-chave |
| `learning_path` | lista de textos | Roteiro de estudos, em ordem |

Qualquer status diferente de `2xx` deve ser tratado como erro.
A quantidade de carreiras pode variar (o exemplo real tem 4). Uma resposta completa está em `js/dados-exemplo.js`.

> **Atenção:** se o backend estiver hospedado em plano gratuito (ex.: Render), a primeira
> requisição depois de um tempo parado pode levar cerca de 1 minuto. Isso não é bug do front.

## Boas práticas que esperamos ver

- **KISS** (*Keep It Simple*): a solução mais simples que resolve o problema.
- **YAGNI** (*You Aren't Gonna Need It*): não crie o que ninguém pediu.
- HTML **semântico** (`header`, `main`, `section`, `footer`, `h1`, `ol`, `label for`…).
- Validação com recursos **nativos do HTML5** sempre que possível.
- `const`/`let`, *arrow functions*, `async/await`, *template strings*.
- `textContent` em vez de `innerHTML` para textos que vêm da API.
- Nomes de variáveis e funções **em português e descritivos**.

## Ferramentas úteis

- **F12 → Console:** erros de JavaScript e `console.log`.
- **F12 → modo dispositivo (Ctrl+Shift+M):** simula celular.
- **F12 → Lighthouse:** auditoria de acessibilidade.
- [W3C Validator](https://validator.w3.org/) — valida o HTML.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — contraste de cores.
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/) — documentação em português.
