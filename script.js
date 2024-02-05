var data = [];
$.getJSON('file:///home/belabbas/Perso/dokkandle/classic.html/js/data.json', function(result) {
    $.each(result, function(index, val) {
        data.push(val);
    });
});
console.log(data);