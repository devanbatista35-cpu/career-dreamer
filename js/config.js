/**
 * Configuração do projeto.
 *
 * Cada grupo deverá solicitar a URL da API para a professora e preencher o campo API_URL abaixo.'
 *
 * Enquanto API_URL estiver vazia, o formulário mostra o aviso "Tente mais tarde".
 */
const CONFIG = Object.freeze({
  API_URL: 'https://google-career-dreamer-api.onrender.com/api/career-match',
  TEMPO_LIMITE_MS: 60000, // servidores gratuitos (ex.: Render) podem levar ~1 min para "acordar"
  CHAVE_RESULTADO: 'careerDreamer:resultado',
});
