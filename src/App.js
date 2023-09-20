import React, { useState, useEffect } from 'react';
import web3 from './web3';
import './style.css';

function App() {
  const [account, setAccount] = useState('');
  const [ethBalance, setEthBalance] = useState('0');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [icoStatus, setIcoStatus] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState(''); // Nuevo estado para la cantidad de inversión

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

    // Simulamos valores ficticios para fines de demostración
    setTokenBalance('1000');
    setIcoStatus('En curso');
  }

  async function investInICO() {
    // Añadir lógica para invertir en ICO aquí
    // Por ejemplo, enviar una transacción de Ethereum para participar en la ICO
    console.log('Invertir en ICO');
  }

  async function claimTokens() {
    // Añadir lógica para reclamar tokens aquí
    // Por ejemplo, enviar una transacción para reclamar tokens
    console.log('Reclamar Tokens');
  }

  return (
    <div className="App">
      <h1>BODOCOIN Interface</h1>
      <p>Cuenta actual: {account}</p>
      <p>Saldo disponible: {ethBalance} SepoliaETH</p>
      <p>Saldo: {tokenBalance} BDC</p>
      <p>Estado ICO: {icoStatus}</p>

      {/* Botones para invertir y reclamar tokens */}
      <div className="buttons">
        <div className="form">
          <label htmlFor="investment-amount">Cantidad de Sepolia-ETH a invertir:</label>
          <input
            type="text"
            id="investment-amount"
            placeholder="Ej. 10.00"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
          <button onClick={investInICO}>Invertir en ICO</button>
        </div>
        <button onClick={claimTokens}>Reclamar Tokens</button>
      </div>
    </div>
  );
}

export default App;
