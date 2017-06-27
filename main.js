"use strict";

var root = 'https://api.github.com/users/';
var search = '';


$(function () {

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        console.log('clicked');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event){
        if (event.target == this || event.target.className == 'close'){
            $(this).removeClass('open');
        }
    });

    $('#query').on('click', function(event) {
        $('#searchField').keyup(function(event){
            if(event.keyCode == 13){}
        });
        event.preventDefault();
        loadResults();
        $('#search').removeClass('open');
    })
});



function loadResults() {
    console.log('Loading...');
    $('#api-output').html("");
    $('#searchTerm').html("");
    search = document.getElementById('searchField').value;
    console.log("Search: " + search);



  $.ajax ({
    url: root + search,
    method:'GET'
  }).then(function(data) {

      var userdata = {
          name: data['name'],
          login: data['login'],
          avatar: $("<img />").attr('src', data['avatar_url']),
          company: data['company'],
          location: data['location'],
          bio: data['bio']
      };
      var linebreak = document.createElement("br");



      $('#searchTerm').append("User: " + userdata.login);
      $('#api-output')
            // .append('<h1 style="text-center">' + "Username: " + login + '</h1>') 
          .append('<h1>' + userdata.name + '</h1>')
          .append(userdata.avatar)
          .append(linebreak)
          .append('<h1>' + userdata.company + '</h1>')
          .append('<h3>' + userdata.location + '</h3>')
          .append('<p>' + userdata.bio + '</p>');
  });

}
