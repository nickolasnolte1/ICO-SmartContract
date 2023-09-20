// Obtiene el balance de ETHSepolia
async function getBalance() {
    const response = await fetch("https://api.sepolia.eth.link/balance");
    const data = await response.json();
    return data.balance;
  }
  
  // Actualiza el balance de ETHSepolia cada segundo
  setInterval(async () => {
    const balance = await getBalance();
    document.getElementById("balance").innerHTML = balance;
  }, 1000);
  
  // Animación del logotipo de Moroccoin
  const logo = document.querySelector("img");
  logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.2)";
  });
  logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1)";
  });
  