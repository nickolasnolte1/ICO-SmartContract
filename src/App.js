// src/App.js
import React, { useState, useEffect } from 'react';
import web3 from './web3';
import './style.css';

function App() {
  const [account, setAccount] = useState('');
  const [ethBalance, setEthBalance] = useState('0');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [icoStatus, setIcoStatus] = useState('');

  useEffect(() => {
    // Cargar la cuenta del usuario y los saldos
    loadBlockchainData();
  }, []);

  async function loadBlockchainData() {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setAccount(account);

    const ethBalance = await web3.eth.getBalance(account);
    setEthBalance(web3.utils.fromWei(ethBalance, 'ether'));

    // Añadir la lógica para obtener el saldo de tokens (BodoCoin)
    // y el estado de la ICO aquí

    // Actualizar el estado de la ICO
    setIcoStatus('En curso');
  }

  // Añadir la lógica para invertir en la ICO y reclamar tokens aquí

  return (
    <div className="App">
      <h1>BodoCoin Interface</h1>
      <p>Cuenta actual: {account}</p>
      <p>Saldo ETH: {ethBalance} ETH</p>
      <p>Saldo de Tokens: {tokenBalance} BodoCoin</p>
      <p>Estado ICO: {icoStatus}</p>

      {/* Agregar formularios o botones para invertir y reclamar tokens */}
    </div>
  );
}

export default App;
