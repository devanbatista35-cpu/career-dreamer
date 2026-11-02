/**
 * Página do formulário (index.html).
 * Lê os dados do formulário e (futuramente) envia para a API.
 */
const formulario = document.querySelector('#form-perfil');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const campos = formulario.elements;
  const nome = campos.nome.value;
  const hobbies = campos.hobbies.value.split(',');
  const interesses = campos.interesses.value.split(',');

  if (hobbies.length === 0 || interesses.length === 0) {
    alert('Preencha os hobbies e interesses.');
    return;
  }

  const perfil = {
    name: nome,
    hobbies: hobbies,
    interests: interesses,
  };

  console.log('Perfil montado:', perfil);

  // TODO: enviar o perfil para a API configurada em CONFIG.API_URL
  // e levar o usuário para a página resultado.html.
  alert('Tente mais tarde');
});
