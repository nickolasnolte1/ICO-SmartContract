
// Importar el contrato ICO aquí
const icoContract = new web3.eth.Contract(contractABI, '0xf193c31cb1CD6e47EFE113C29a3121B1E6ad171F');

// Función para invertir en la ICO
async function investInICO(amount) {
    try {
      await icoContract.methods.invest(web3.utils.toWei(amount, 'ether')).send({
        from: account,
        value: web3.utils.toWei(amount, 'ether'),
      });
      // Actualizar el saldo de tokens y otros detalles
    } catch (error) {
      console.error(error);
    }
  }
  
  // Función para reclamar tokens
  async function claimTokens() {
    try {
      await icoContract.methods.claimTokens().send({ from: account });
      // Actualizar el saldo de tokens y otros detalles
    } catch (error) {
      console.error(error);
    }
  }
  