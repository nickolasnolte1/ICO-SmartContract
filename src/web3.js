import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Utilizar MetaMask como proveedor si está disponible en el navegador
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  // Si MetaMask no está disponible, configurar un proveedor de Infura u otro proveedor
  const providerUrl = 'https://mainnet.infura.io/v3/your-infura-api-key';
  web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
}

export default web3;
