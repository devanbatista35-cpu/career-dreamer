/**
 * Página de resultado (resultado.html).
 *
 * Objetivo: ler o JSON que a API devolveu e mostrar o perfil na tela.
 * Para testar SEM o backend, abra: resultado.html?exemplo
 * (os dados de teste estão em js/dados-exemplo.js, na constante DADOS_EXEMPLO).
 *
 * O HTML já tem tudo o que você precisa:
 *   - #resultado ............ seção que mostra o perfil (começa escondida)
 *   - #sem-resultado ........ seção para quando não há dados (começa escondida)
 *   - #nome-usuario, #sintese, #lista-carreiras
 *   - <template id="modelo-carreira"> ... modelo de card para clonar
 *
 * Formato do JSON: veja o README.md, seção "Contrato da API".
 */

// TODO 1: descobrir de onde vêm os dados
//   - se a URL tiver ?exemplo, use DADOS_EXEMPLO
//   - senão, leia o que o formulário salvou no sessionStorage (CONFIG.CHAVE_RESULTADO)

// TODO 2: se não houver dados válidos, mostre a seção #sem-resultado

// TODO 3: se houver dados, preencha nome e síntese e, para cada carreira,
//   clone o <template>, preencha título, nota, resumo, competências e roteiro
//   e adicione na lista #lista-carreiras. A primeira carreira é a "Melhor combinação".
//   Dica: use textContent (e não innerHTML) para colocar textos vindos da API.
