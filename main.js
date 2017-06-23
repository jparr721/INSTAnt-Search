// var root = 'https://api.github.com/users/';
var root = 'https://api.github.com/repos/angular/angular/issues?since=';
var search = '';
var result = '';

$(function () {

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        console.log('clicked');
        $('#search > form > input[type="search"]').focus();
    });

    loadResults();

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
  console.log('Loading...');

  let date = new Date();
  //set the date back the last 7 days
  date.setDate(date.getDate() - 7);
  root = root + date.toISOString();
  console.log('URL: ' + root);

  $.ajax ({
    url: root,
    method:'GET'
  }).then(function(data) {
    // result = data[0]['id'];
    // console.log(result);
    // var result = data.map(function(obj){
    //   for (var i = 0; i < )
    // })
    for (var i = 0; i < data.length; i++ ){
      var id = data[i]['labels'];
      for(var j = 0; j < id.length; j++){
        var colors = id[j]['color'];
        console.log(colors);
      }
      $('#api-output').append('<p style="text-align: left">' + colors + ", " + '</p>'  + "\n");
    }

  });

}

function searchPosts() {

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
