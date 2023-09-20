// Importa Web3.js y el contrato inteligente
const Web3 = require('web3');
const BodoCoinICO = require('./BodoCoinICO.json'); // Asegúrate de tener el archivo JSON de tu contrato

// Conecta con Ethereum (reemplaza la URL con la de tu elección)
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id'); // Reemplaza con tu propio proyecto de Infura

// Dirección del contrato inteligente (reemplaza con la dirección de tu contrato)
const contractAddress = '0xYourContractAddress';

// Crea una instancia del contrato ICO
const bodoCoinICOContract = new web3.eth.Contract(BodoCoinICO.abi, contractAddress);

// Función para cargar datos iniciales
async function loadInitialData() {
    try {
        // Obtiene la dirección de la cuenta del usuario
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Obtiene el saldo de Sepolia-ETH del usuario
        const ethBalance = await web3.eth.getBalance(userAddress);
        console.log('Saldo ETH:', web3.utils.fromWei(ethBalance, 'ether'));

        // Obtiene el saldo de tokens (BodoCoin) del usuario
        const tokenBalance = await bodoCoinICOContract.methods.balanceOf(userAddress).call();
        console.log('Saldo BodoCoin:', tokenBalance);

        // Obtiene la cantidad de BodoCoin pendiente de reclamo por el usuario
        const pendingTokens = await bodoCoinICOContract.methods.pendingTokens(userAddress).call();
        console.log('BodoCoin Pendiente de Reclamo:', pendingTokens);

        // Obtiene el estado temporal de la ICO
        const timeRemaining = await bodoCoinICOContract.methods.getTimeRemaining().call();
        console.log('Tiempo restante:', timeRemaining, 'días');

        const tokensSold = await bodoCoinICOContract.methods.tokensSold().call();
        console.log('Cantidad de tokens vendidos:', tokensSold);

        const ethReceived = await bodoCoinICOContract.methods.ethReceived().call();
        console.log('Cantidad de Sepolia-ETH recibidos:', web3.utils.fromWei(ethReceived, 'ether'));
    } catch (error) {
        console.error('Error al cargar datos iniciales:', error);
    }
}

// Función para invertir en la ICO
async function investInICO(investmentAmount) {
    try {
        // Obtiene la dirección de la cuenta del usuario
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Enviar transacción para invertir en la ICO
        const transaction = await bodoCoinICOContract.methods.invest().send({
            from: userAddress,
            value: web3.utils.toWei(investmentAmount, 'ether'),
        });

        console.log('Transacción de inversión enviada:', transaction);
    } catch (error) {
        console.error('Error al invertir en la ICO:', error);
    }
}

// Función para reclamar tokens
async function claimTokens() {
    try {
        // Obtiene la dirección de la cuenta del usuario
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Enviar transacción para reclamar tokens
        const transaction = await bodoCoinICOContract.methods.claimTokens().send({
            from: userAddress,
        });

        console.log('Transacción de reclamo de tokens enviada:', transaction);
    } catch (error) {
        console.error('Error al reclamar tokens:', error);
    }
}

// Cargar datos iniciales al iniciar la aplicación
loadInitialData();

// Ejemplo de inversión en la ICO (descomenta la línea siguiente y reemplaza con la cantidad que desees)
// investInICO('1.5');

// Ejemplo de reclamo de tokens (descomenta la línea siguiente)
// claimTokens();
