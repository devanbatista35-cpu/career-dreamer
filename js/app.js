/**
 * Página do formulário (index.html).
 * Lê os dados do formulário e (futuramente) envia para a API.
 */
const formulario = document.querySelector('#form-perfil');
const modalAviso = document.querySelector('#modal-aviso');
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

// O aviso some assim que a pessoa volta a digitar no campo.
['nome', 'hobbies', 'interesses'].forEach((id) => {
  formulario.elements[id].addEventListener('input', (evento) => {
    definirErro(evento.target, '');
  });
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

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

  console.log('Perfil montado:', perfil);

  // TODO: enviar o perfil para a API configurada em CONFIG.API_URL
  // e levar o usuário para a página resultado.html.
  modalAviso.showModal();
});