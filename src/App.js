import React, { useState, useEffect } from 'react';
import web3 from './web3';
import './style.css';
import contractABI from './ABI.json';

function App() {
  const [account, setAccount] = useState('');
  const [ethBalance, setEthBalance] = useState('0');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [icoStatus, setIcoStatus] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState(''); // Nuevo estado para la cantidad de inversión
  const contractTokenAddress = '0xe051aeF51F721D107E1A81B675eA2ad43ca4F682';

  async function loadBlockchainData() {
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);
  
      const ethBalance = await web3.eth.getBalance(account);
      setEthBalance(web3.utils.fromWei(ethBalance, 'ether'));



      const contractTokenContract = new web3.eth.Contract(contractABI, contractTokenAddress);
      const contractTokenBalanceWei = await contractTokenContract.methods.balanceOf(account).call();
      const contractTokenBalance = web3.utils.fromWei(contractTokenBalanceWei, 'ether');
        setTokenBalance(contractTokenBalance);
  
      // Consultar el estado de la ICO desde tu contrato inteligente
      const icoStatus = await contract.methods.icoStatus().call();
      setIcoStatus(icoStatus === true ? 'En curso' : 'Finalizada');
    } catch (error) {
      console.error('Error al cargar datos desde el contrato:', error);
      alert('Error al cargar datos desde el contrato. Consulta la consola para obtener más detalles.');
    }
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);
  

  async function investInICO() {
    try {
      const investmentInEther = parseFloat(investmentAmount);
      if (isNaN(investmentInEther) || investmentInEther <= 0) {
        alert('Ingrese una cantidad válida para invertir.');
        return;
      }
  
      // Convierte la cantidad de inversión de Ether a Wei
      const investmentInWei = web3.utils.toWei(investmentAmount, 'ether');
  
      // Llama a la función de inversión en el contrato inteligente
      const contract = new web3.eth.Contract(contractABI, '0xe051aeF51F721D107E1A81B675eA2ad43ca4F682'); 
      await contract.methods.claimTokens().send({
        from: account,
        value: investmentInWei,
      });
  
      // Actualiza los saldos y estados después de la inversión
      loadBlockchainData();
    } catch (error) {
      console.error('Error al invertir en la ICO:', error);
      alert('Error al invertir en la ICO. Consulta la consola para obtener más detalles.');
    }
  }
  

  async function claimTokens() {
    try {
      // Llama a la función de reclamación de tokens en tu contrato inteligente
      const contract = new web3.eth.Contract(contractABI, '0xe051aeF51F721D107E1A81B675eA2ad43ca4F682'); 
      await contract.methods.claimTokens().send({
        from: account,
      });
  
      // Actualiza los saldos y estados después de la reclamación
      loadBlockchainData();
    } catch (error) {
      console.error('Error al reclamar tokens:', error);
      alert('Error al reclamar tokens. Consulta la consola para obtener más detalles.');
    }
  }
  
  return (
    <div className="App">
      <div>
        <h1>BODOCOIN Interface</h1>
      </div>
      <p><strong>Cuenta actual:</strong> {account}</p>
      <p><strong>Saldo en SepoliaETH:</strong> {ethBalance} </p>
      <p><strong>Saldo en BDC:</strong> {tokenBalance}</p>
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