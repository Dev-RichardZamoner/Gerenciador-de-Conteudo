/*
 *  LOGIN.html
 */

// Dados Corretos
// @todo Adicionar BD

const utilizador_correto = 'DTH';
const password_correta = 1234;

$('#login').on('click', function(e) {
  // Impede que o botão efetue o comportamento padrão
  e.preventDefault();

  // Obtém os dados da DOM
  var utilizador = $('#utilizador').val();
  var password = $('#password').val();

  if (utilizador == utilizador_correto && password == password_correta) {
    // Redireciona o utilizador para dashboard.html e inicia a sessão
    $(location).attr('href', '/dth.html');
  } else {
    // Mensagem de erro
    Swal.fire({
      title: 'Erro',
      text: 'Utilizador ou Password Incorreta ( Entre em contato com Richard )',
      type: 'error',
      confirmButtonText: 'OK'
    });
  }
});
