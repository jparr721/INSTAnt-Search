var root = 'https://jsonplaceholder.typicode.com';

$(function () {


    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#searchField').keyup(function(event){
       if(event.keyCode == 13){
           $('#query').click();
       }
    });

    $.ajax({
        url: root + '/users/',
        method: 'GET'
        }).then(function(data) {
            console.log(data);
            document.getElementById('api-output').innerHTML = JSON.stringify(data);
    });

    $('#search, #search button.close').on('click keyup', function(event){
        if (event.target == this || event.target.className == 'close'){
            $(this).removeClass('open');
        }
    });
});

// function isSearchEmpty() {
//     var query = $('#searchField').val();
//     if (query.indexOf('#') > -1) {
//         console.log("querying data....");
//         console.log(query);
//         $('#search').removeClass('open');
//         $('#searchTerm').append(query);
//
//         var beginQuery = function (item) {
//             this.item = query;
//             $ajax({
//                 url: root + '/' + item + '/5',
//                 method: 'GET'
//             }).then(function (data) {
//
//             });
//         };
//
//         beginQuery(query);
//
//     } else {
//         console.error("No hashtag included in query, firing alert...");
//         // alert("ERROR: Please include a '#'");
//     }
// }
//
// function Query() {
//     var query = document.getElementById('searchField').value;
//
// }
