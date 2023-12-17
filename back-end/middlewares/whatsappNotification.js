// ESTUDAR A LOGICA PARA CRIAR BOT DE NOTIFICAÇÃO




// ESTUDAR TWILIO OU PUPPETEER PARA CRIAR BOT DE NOTIFICAÇÃO





// Const twilio = require('twilio');
// // OU
// const puppeteer = require('puppeteer');

// export const enviarMensagemWhatsApp = async (numero, mensagem) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navegue até o WhatsApp Web
//   await page.goto('https://web.whatsapp.com/');
//   // Aguarde o usuário fazer o login manualmente, ou você pode automatizar o login se tiver as credenciais

//   // Localize o campo de pesquisa e insira o número de telefone
//   await page.type('._2zCfw', numero); // O seletor pode variar com base na versão do WhatsApp Web

//   // Espere por um tempo para garantir que a lista de contatos seja atualizada
//   await page.waitForTimeout(2000);

//   // Localize o campo de mensagem e insira o texto da mensagem
//   await page.type('div[data-tab="6"]', mensagem); // O seletor pode variar com base na versão do WhatsApp Web

//   // Envie a mensagem pressionando a tecla Enter
//   await page.keyboard.press('Enter');

//   await browser.close();
// };

// // Exemplo de uso
// enviarMensagemWhatsApp('Número_de_Destinatário', 'Sua mensagem aqui')
//   .then(() => console.log('Mensagem enviada com sucesso'))
//   .catch(error => console.error('Erro ao enviar mensagem:', error));
