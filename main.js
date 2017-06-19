var token = '398946326.5f85a1c.02de1fe8b8cf405699b2d68724ab938a'
var root = 'https://api.instagram.com/v1/tags/';

$(function () {

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        console.log('clicked');
        $('#search > form > input[type="search"]').focus();
    });

    $.ajax ({
      url: root + 'search?q='+ '{hello}' +'&access_token=' + token,
      method: 'GET'
    }).then(function(data) {
      var result = data.map(function(obj) {
        var output = obj.data.tags;

        $('#api-output').innerHTML = "tags: " + output;
      });
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
});

function loadResults() {
  console.log('Load!');
  var tag = document.getElementById('searchField').value;
  $('#search').removeClass('open');
  $('#search').value = "";

  if (isFieldEmpty(tag)){
    $('#searchTerm').append(tag);
  } else {
    $('#searchTerm').innerHTML == "";
    $('#searchTerm').append(tag);
  }
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

function isFieldEmpty(field) {
  if(field.innerHTML == ""){
    return true;
  }
}

//
// function query() {
//     var query = document.getElementById('searchField').value;
//     var searchField = "name";
//     var result = [];
//
//     $('#search').removeClass('open');
//     $('#searchTerm').append(query);
//
//     $.ajax({
//         url: root + '/users',
//         method: 'GET'
//     }).then(function(data){
//         console.log(data);
//
//         result = data.filter(function (user) {
//             return user.name == searchField;
//         });
//         // for (var i = 0; i < data.length; i++) {
//         //     if (data[i][searchField] == query){
//         //         result.push(data[i]);
//         //     }
//         // }
//
//         $('api-output').innerHTML = result;
//     });
