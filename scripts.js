let chave = "d366c9479bcbd63c047d7e6b7b4b7233";

async function buscarCidade() {
  let cidade = document.getElementById("input-cidade").value;
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br`;
  let dados = await fetch(link).then(resposta => resposta.json());
  
  
  let temperaturaCelsius = (dados.main.temp - 273.15).toFixed(2);

  
  document.getElementById("cidade").innerText = `Tempo em ${cidade}`;
  document.getElementById("temp").innerText = `${temperaturaCelsius}°C`;
  document.getElementById("icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  document.getElementById("umidade").innerText = `Umidade: ${dados.main.humidity}%`;


  document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?landscape&${Math.random()})`;
}
