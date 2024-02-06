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
