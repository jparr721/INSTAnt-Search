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
        url: root + '/users',
        method: 'GET'
        }).then(function(data) {
            console.log(JSON.stringify(data));
            var result = data.map(function (obj) {
            // return "name: " + obj.name;

                for (var i = 0; i < obj.name.length; i++){
                    var names = obj.name[i];
                    document.getElementById('api-output').innerHTML = ('<p>' + names + '</p>');
                }

            });

            // document.getElementById('api-output').innerHTML = ('<h1>' + JSON.stringify(result, null, "\t") + '</h1>');
    });

    $('#search, #search button.close').on('click keyup', function(event){
        if (event.target == this || event.target.className == 'close'){
            $(this).removeClass('open');
        }
    });
});


function loadResults() {

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




