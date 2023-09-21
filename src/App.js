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
      <div>
        <h1>BODOCOIN Interface</h1>
      </div>
      <p><strong>Cuenta actual:</strong> {account}</p>
      <p><strong>Saldo disponible:</strong> {ethBalance} SepoliaETH</p>
      <p><strong>Saldo:</strong> {tokenBalance} BDC</p>
      <p><strong>Estado ICO:</strong> {icoStatus}</p>

      {/* Botones para invertir y reclamar tokens */}
      <div className="buttons">
        <div className="form">
          <label htmlFor="investment-amount"><strong>Cantidad de Sepolia-ETH a invertir:</strong>     </label>
          <input
            type="text"
            id="investment-amount"
            placeholder="Ej. 2.00"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
          <button onClick={investInICO}>Invertir en ICO</button>
        </div>
        <button onClick={claimTokens}>Reclamar Tokens</button>
      </div>
      <div>
        <p3 className="App2">1 SepoliaETH = 40 BDC</p3>
      </div>
    </div>
  );
}

export default App;