# ICO - Smart Contract

![Screenshot](screenshot.png)

## About
El propósito de este proyecto es desarrollar una Oferta Inicial de Monedas (ICO) basada en la cadena de bloques Ethereum. La ICO tiene como objetivo recaudar 10 Sepolia-ETH, y para lograrlo, se implementará un contrato inteligente en Solidity que permitirá a los usuarios participar en la ICO mediante la transferencia de Sepolia-ETH. Además, se creará una interfaz de usuario simple para que los inversores puedan interactuar con el contrato inteligente. 

Este proyecto busca demostrar la capacidad de desarrollar contratos inteligentes y aplicaciones descentralizadas en Ethereum, así como la interacción fluida entre la cadena de bloques y una interfaz de usuario amigable para los usuarios finales.


## Detalles del Token y la ICO

- Nombre del Token: BODOCOIN
- Símbolo del Token: BDC
- Decimales: 18
- Duración de la ICO: 7 días
- Valor del Token:  1 SepoliaETH = 40 BDC

## Smart Contract 

Contrato ICO en Solidity

El contrato inteligente fue desarrollado en `Solidity` y cumple con los siguientes requisitos:

- Permite que cualquier usuario participe en la ICO transfiriendo Sepolia-ETH.
- Los tokens adquiridos deben ser entregados al inversor una vez que finalice la ICO.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- El contrato fue hecho en Remix IDE
- Se conectó la billetera de MetaMask al contrato directamente en Remix, a la hora de hacer deploy al contrato


## Requerimientos para correr el app

1. Es necesario instalar el módulo de *Web3* dentro del ambiente de React con el siguiente comando: `npm install web3`
2. Es necesario instalar el módulo de *Ethers* dentro del ambiente de React con el siguiente comando: `nmp install ethers`
3. Tener una billetera en MetaMask.
4. Tener SepoliaETH dentro de la billetera
   4.1 Las Sepolias se tienen que [minar](lia-faucet.pk910.de/#/) desde antes. [Visitar](https://google.com)

5. Correr el el file App.js con el siguiente comando: `npm start`
6. 



Dirección que se debe utilizar para enviar SepoliaETH's: `0xe051aeF51F721D107E1A81B675eA2ad43ca4F682`



## Autores
Nickolas Nolte
