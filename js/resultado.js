/**
 * Página de resultado (resultado.html).
 *
 * Lê o JSON que a API devolveu e mostra o perfil na tela.
 * Para testar SEM o backend, abra: resultado.html?exemplo
 */
const secaoResultado = document.querySelector('#resultado');
const secaoVazia = document.querySelector('#sem-resultado');
const nomeUsuario = document.querySelector('#nome-usuario');
const sintese = document.querySelector('#sintese');
const listaCarreiras = document.querySelector('#lista-carreiras');
const modeloCarreira = document.querySelector('#modelo-carreira');

/** Limita a nota ao intervalo 0–100 (e trata valores inválidos como 0). */
function normalizarNota(valor) {
  const numero = Number(valor);
  if (Number.isNaN(numero)) return 0;
  return Math.max(0, Math.min(100, Math.round(numero)));
}

/** TODO 1: descobre de onde vêm os dados. Devolve null se não houver nada. */
function obterResultado() {
  const usarExemplo = new URLSearchParams(window.location.search).has('exemplo');

  if (usarExemplo) {
    return typeof DADOS_EXEMPLO !== 'undefined' ? DADOS_EXEMPLO : null;
  }

  try {
    const bruto = sessionStorage.getItem(CONFIG.CHAVE_RESULTADO);
    return bruto ? JSON.parse(bruto) : null;
  } catch {
    return null; // JSON quebrado ou storage indisponível
  }
}

/** TODO 2: confere o mínimo necessário para montar a tela. */
function resultadoValido(resultado) {
  return Boolean(
    resultado &&
      Array.isArray(resultado.recommended_careers) &&
      resultado.recommended_careers.length > 0
  );
}

/** Preenche uma <ul>/<ol> com um <li> por texto (textContent: seguro). */
function preencherLista(lista, textos) {
  const itens = Array.isArray(textos) ? textos : [];
  itens.forEach((texto) => {
    const item = document.createElement('li');
    item.textContent = texto;
    lista.append(item);
  });
}

/** TODO 3: clona o <template> e preenche com os dados de uma carreira. */
function montarCarreira(carreira, indice) {
  const nota = normalizarNota(carreira.match_score);
  const cartao = modeloCarreira.content.cloneNode(true);

  const itemLista = cartao.querySelector('.carreira');
  const selo = cartao.querySelector('.carreira__selo');
  const titulo = cartao.querySelector('.carreira__titulo');
  const percentual = cartao.querySelector('.carreira__percentual');
  const nivel = cartao.querySelector('.barra__nivel');
  const resumo = cartao.querySelector('.carreira__resumo');
  const chips = cartao.querySelector('.chips');
  const roteiro = cartao.querySelector('.roteiro');

  // A primeira carreira (depois de ordenar) é a "Melhor combinação".
  if (indice === 0) {
    selo.hidden = false;
    itemLista.classList.add('carreira--principal');
  }

  titulo.textContent = carreira.title || '';
  percentual.textContent = `${nota}%`;
  resumo.textContent = carreira.summary || '';

  preencherLista(chips, carreira.key_skills);
  preencherLista(roteiro, carreira.learning_path);

  // Anima a barra: começa em 0% e sobe no quadro seguinte.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => nivel.style.setProperty('--nivel', `${nota}%`));
  });

  return cartao;
}

function mostrarResultado(resultado) {
  nomeUsuario.textContent = resultado.user_name || '';
  sintese.textContent = resultado.career_identity_statement || '';
  document.title = `Perfil de ${resultado.user_name || 'você'} — Career Dreamer`;

  // Da mais compatível para a menos compatível (sem alterar o original).
  const ordenadas = [...resultado.recommended_careers].sort(
    (a, b) => normalizarNota(b.match_score) - normalizarNota(a.match_score)
  );

  ordenadas.forEach((carreira, indice) => {
    listaCarreiras.append(montarCarreira(carreira, indice));
  });

  secaoResultado.hidden = false;
}

const resultado = obterResultado();

if (resultadoValido(resultado)) {
  mostrarResultado(resultado);
} else {
  secaoVazia.hidden = false;
}