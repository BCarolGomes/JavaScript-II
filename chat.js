/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }
const listaMensagens = [];

function adicionarMensagem(apelido, mensagem) {
  const novaMsg = {
    "apelido": apelido,
    "mensagem": mensagem
  };
  listaMensagens.push(novaMsg);
}

function formatarMensagens() {
  const msgsHTML = '';

  listaMensagens.forEach(mensagem => {
    msgsHTML += `
      <div class="chat-messages">
          <span class="chat-message-apelido">${mensagem.apelido}</span>
          <span class="chat-message-item">${mensagem.mensagem}</span>
      </div>`; 
  });

  return msgsHTML;
}

function atualizarHTML() {
  const msgsFormatadas = formatarMensagens();

  document.getElementById("chat-messages").innerHTML = msgsFormatadas;
}

function commitMessageClickHandler() {
  const msgInput = document.getElementById("messages-input").value.trim();

  if (msgInput !== '') {
    adicionarMensagem("Usuário", msgInput);

    document.getElementById("message-input").value = '';
  } else {
    alert ("Digite sua mensagem, por favor.");
  }
}
// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------