"use strict";

var root = 'https://api.github.com/users/';
var search = '';
var result = '';

$(function () {

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        console.log('clicked');
        $('#search > form > input[type="search"]').focus();
    });

    $('#searchField').keyup(function(event){
       if(event.keyCode == 13){
           $('#query').click();
       }
    });

    $('#search, #search button.close').on('click keyup', function(event){
        if (event.target == this || event.target.className == 'close'){
            $(this).removeClass('open');
        }
    });

    $('#query').on('click', function(event) {
        event.preventDefault();
        loadResults();
        $('#search').removeClass('open');
    })
});



function loadResults() {
  console.log('Loading...');
  search = document.getElementById('searchField').value;
  // console.log(search);

  // var date = new Date();
  // //set the date back the last 7 days
  // date.setDate(date.getDate() - 7);
  // root = root + date.toISOString();
  // console.log('URL: ' + root);

  $.ajax ({
    url: root + search,
    method:'GET'
  }).then(function(data) {
    for (var i = 0; i < data.length; i++ ){
      var id = data[i]['name'];
        // console.log(JSON.stringify(id + "1"));
      $('#api-output').append('<h1 style="text-center">' + id + '</h1>');
    }
    console.log(JSON.stringify(id));
  });

}

//   $.ajax ({
//     url: root + 'search?q='+ tag +'&access_token=' + token,
//     method: 'GET'
//   }).then(function(data) {
//     var result = data.map(function(obj) {
//       var output = obj.data.tags;
//
//       $('#api-output').innerHTML = "tags: " + output;
//     });
//   });
// }
