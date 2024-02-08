
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
      document.getElementById("res").innerHTML += "<br>";
      document.getElementById("res").innerHTML += data["Nom"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Genre"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Classe"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Rarete"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Type"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Race"];
      document.getElementById("res").innerHTML += "&nbsp;";
      document.getElementById("res").innerHTML += data["Anne"];
    })
    .catch(error => console.log('error', error));
}
