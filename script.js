
let allDatas = [];
(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`http://127.0.0.1:5000/`, requestOptions)
    .then(response => response.text())
    .then(result => allDatas = JSON.parse(result))
    .catch(error => console.log('error', error));
})();

function showOccurences(string) {
  document.getElementById("occurences").innerHTML = "";
  let result = allDatas?.filter(data => data?.Nom?.toLowerCase().includes(string.toLowerCase()));
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    let element = result[i];
    document.getElementById("occurences").innerHTML += "<button class='choice' onclick='fetchData(\"" + element["Nom"] + "\")'>";
    document.getElementById("occurences").innerHTML += element["Nom"];
    document.getElementById("occurences").innerHTML += "</button><br>";
  }
  return result;
} 

function fetchData(value) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`http://127.0.0.1:5000/${value}`, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result);
      let data = JSON.parse(result);
      if (data["Nom"] == undefined) {
        return;
      }
      document.getElementById("res").innerHTML += `<img src='${data["Image"]}' alt='Image de la carte' class='card_img'>`;
      //document.getElementById("res").innerHTML += data["Nom"];
      if (data["Genre"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Genre"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Genre"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Genre"];
      if (data["Classe"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Classe"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Classe"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Classe"];
      if (data["Rarete"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Rarete"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Rarete"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Rarete"];
      if (data["Type"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Type"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Type"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Type"];
      if (data["Race"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Race"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Race"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Race"];
      if (data["Anne"] == true) {
        document.getElementById("res").innerHTML += `<div class='card_true'>${data["choose"]["Date de sortie"]}</div>`;
      } else {
        document.getElementById("res").innerHTML += `<div class='card_false'>${data["choose"]["Date de sortie"]}</div>`;
      }
      //document.getElementById("res").innerHTML += data["Anne"];
    })
    .catch(error => console.log('error', error));
}
