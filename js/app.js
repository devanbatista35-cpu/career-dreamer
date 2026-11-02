/**
 * Página do formulário (index.html).
 * Valida os dados, envia para a API (CONFIG.API_URL) e leva
 * a pessoa para resultado.html quando a resposta chega.
 */
const formulario = document.querySelector('#form-perfil');
const botaoEnviar = formulario.querySelector('button[type="submit"]');
const modalAviso = document.querySelector('#modal-aviso');
const modalTexto = document.querySelector('#modal-texto');

const TEXTO_BOTAO = botaoEnviar.textContent;

const MENSAGENS = {
  semApi:
    'O serviço de análise de carreiras ainda não está disponível. Volte em breve para ver seu mapa de carreiras.',
  tempo:
    'A análise demorou mais do que o esperado. Seus dados continuam no formulário: tente novamente em alguns instantes.',
  erro:
    'Não foi possível concluir a análise agora. Seus dados continuam no formulário: tente novamente em alguns instantes.',
  rede:
    'Não conseguimos falar com o serviço. Verifique sua conexão e tente novamente. Seus dados continuam no formulário.',
};

/** Abre o modal com a mensagem indicada. */
function mostrarAviso(mensagem) {
  modalTexto.textContent = mensagem;
  modalAviso.showModal();
}

/** Liga/desliga o estado de carregamento do botão. */
function definirCarregando(carregando) {
  botaoEnviar.disabled = carregando;
  botaoEnviar.textContent = carregando ? 'Analisando…' : TEXTO_BOTAO;
  formulario.setAttribute('aria-busy', String(carregando));
}

/**
 * Transforma "jogar, , desenhar ,," em ["jogar", "desenhar"]:
 * remove espaços das pontas e descarta itens vazios.
 */
function textoParaLista(texto) {
  return texto
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '');
}

/** Marca o campo com a mensagem de erro, ou limpa o erro se for ''. */
function definirErro(campo, mensagem) {
  campo.setCustomValidity(mensagem);
}

/**
 * Envia o perfil para a API.
 * Lança um Error com .tipo = 'tempo' | 'erro' | 'rede'.
 */
async function enviarPerfil(perfil) {
  const controlador = new AbortController();
  const temporizador = setTimeout(() => controlador.abort(), CONFIG.TEMPO_LIMITE_MS);

  try {
    const resposta = await fetch(CONFIG.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(perfil),
      signal: controlador.signal,
    });

    if (!resposta.ok) {
      const falha = new Error(`Status ${resposta.status}`);
      falha.tipo = 'erro';
      throw falha;
    }

    try {
      return await resposta.json();
    } catch {
      const falha = new Error('Resposta fora do formato JSON');
      falha.tipo = 'erro';
      throw falha;
    }
  } catch (falha) {
    if (falha.tipo) throw falha;
    // AbortError = estourou o tempo limite; TypeError = sem rede/CORS
    falha.tipo = falha.name === 'AbortError' ? 'tempo' : 'rede';
    throw falha;
  } finally {
    clearTimeout(temporizador);
  }
}

// O aviso de validação some assim que a pessoa volta a digitar.
['nome', 'hobbies', 'interesses'].forEach((id) => {
  formulario.elements[id].addEventListener('input', (evento) => {
    definirErro(evento.target, '');
  });
});

// Clicar no fundo escuro também fecha o modal.
modalAviso.addEventListener('click', (evento) => {
  if (evento.target === modalAviso) modalAviso.close();
});

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  // Trava contra clique duplo (Enter no campo de nome também dispara submit).
  if (botaoEnviar.disabled) return;

  const campos = formulario.elements;
  const nome = campos.nome.value.trim();
  const hobbies = textoParaLista(campos.hobbies.value);
  const interesses = textoParaLista(campos.interesses.value);

  definirErro(
    campos.nome,
    nome.length < 2 ? 'Informe seu nome (mínimo de 2 letras).' : ''
  );
  definirErro(
    campos.hobbies,
    hobbies.length === 0
      ? 'Informe pelo menos um hobby, separado por vírgula.'
      : ''
  );
  definirErro(
    campos.interesses,
    interesses.length === 0
      ? 'Informe pelo menos uma área de interesse, separada por vírgula.'
      : ''
  );

  // Mostra o aviso no primeiro campo inválido e leva o foco até ele.
  if (!formulario.reportValidity()) return;

  const perfil = {
    name: nome,
    hobbies: hobbies,
    interests: interesses,
  };

  // Endereço ainda não configurado: avisa e não tenta enviar.
  if (!CONFIG.API_URL.trim()) {
    mostrarAviso(MENSAGENS.semApi);
    return;
  }

  definirCarregando(true);

  try {
    const resultado = await enviarPerfil(perfil);
    sessionStorage.setItem(CONFIG.CHAVE_RESULTADO, JSON.stringify(resultado));
    window.location.href = 'resultado.html';
    // Sem definirCarregando(false): a página vai trocar, e manter o
    // botão travado evita um segundo envio durante o redirecionamento.
  } catch (falha) {
    console.error('Falha ao enviar o perfil:', falha);
    definirCarregando(false);
    mostrarAviso(MENSAGENS[falha.tipo] || MENSAGENS.erro);
  }
});