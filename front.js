import React, { useState, useEffect } from "react";
import { useWeb3 } from "@web3/react";
import { Contract, Signer } from "@ethersproject/contracts";

const MarrocoinICO = () => {
  const [web3, chainId] = useWeb3();
  const [balance, setBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [pendingTokenBalance, setPendingTokenBalance] = useState(0);
  const [icoStatus, setIcoStatus] = useState({
    started: false,
    ended: false,
    tokensSold: 0,
    ethRaised: 0,
  });

  const [amount, setAmount] = useState(0);

  const signer = new Signer(web3.currentProvider);

  const contract = new Contract(
    chainId,
    "0x1234567890123456789012345678901234567890",
    "MarrocoinICO",
    signer
  );

  useEffect(() => {
    getBalance();
    getIcoStatus();
  }, []);

  const getBalance = async () => {
    const balanceData = await contract.methods.balanceOf(web3.eth.accounts[0]).call();
    setBalance(balanceData);
  };

  const getIcoStatus = async () => {
    const statusData = await contract.methods.getStatus().call();
    setIcoStatus({
      started: statusData.started,
      ended: statusData.ended,
      tokensSold: statusData.tokensSold,
      ethRaised: statusData.ethRaised,
    });
  };

  const participate = async () => {
    if (!icoStatus.started) {
      return;
    }

    if (amount <= 0) {
      return;
    }

    const transaction = await contract.methods.participate().send({
      value: amount,
    });
    await transaction.wait();

    setPendingTokenBalance(balance + transaction.receipt.logs[0].data);
  };

  const claimTokens = async () => {
    if (!icoStatus.ended) {
      return;
    }

    const transaction = await contract.methods.claimTokens().send();
    await transaction.wait();

    setTokenBalance(balance + transaction.receipt.logs[0].data);
  };

  return (
    <div>
      <h1>Marrocoin ICO</h1>
      <p>
        Tu saldo actual de Sepolia-ETH es: {balance}
      </p>
      <p>
        Tu saldo actual de Marrocoin es: {tokenBalance}
      </p>
      <p>
        Tu saldo pendiente de Marrocoin es: {pendingTokenBalance}
      </p>
      <p>
        El estado actual de la ICO es:
        {icoStatus.started ? "Iniciada" : "No iniciada"}
        {icoStatus.ended ? "Finalizada" : ""}
      </p>
      <p>
        Cantidad a invertir:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </p>
      <button onClick={participate}>Participar</button>
      <button onClick={claimTokens}>Reclamar tokens</button>
    </div>
  );
};

export default MarrocoinICO;
