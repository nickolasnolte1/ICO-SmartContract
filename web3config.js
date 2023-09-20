const Web3 = require('web3');

// Conectar a una red Ethereum (por ejemplo, la red principal o Ropsten)
const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-project-id');

// Exportar la instancia de Web3 para usarla en otros archivos
module.exports = web3;
