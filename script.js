var data = [];
$.getJSON(
  "data.json",
  function (result) {
    $.each(result, function (index, val) {
      data.push(val);
    });
  }
);
console.log(data);


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
