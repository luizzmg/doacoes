(function(){
  emailjs.init("PUBLIC_KEY"); // ainda vou substituir a key
})();

// Funções de navegação
function showForm() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('donation-form').style.display = 'block';
}

function showDonationLocation() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('donation-location').style.display = 'block';
}

function backToStart() {
  document.getElementById('donation-form').style.display = 'none';
  document.getElementById('donation-location').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

// Função para enviar e-mail
document.getElementById('donationRequestForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores do formulário
  var address = document.getElementById('address').value;
  var familySize = document.getElementById('familySize').value;

  // Configura os parâmetros do e-mail
  var templateParams = {
      to_name: "Administrador", // Nome do destinatário (opcional)
      address: address,
      familySize: familySize
  };

  // Envia o e-mail usando o EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(function(response) {
          alert("Pedido enviado com sucesso!");
          backToStart(); // Retorna à tela inicial
      }, function(error) {
          alert("Erro ao enviar o pedido. Tente novamente.");
          console.log("Erro:", error);
      });
});