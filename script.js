
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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
