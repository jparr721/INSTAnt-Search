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

    $('#search, #search button.close').on('click keyup', function(event){
        if (event.target == this || event.target.className == 'close'){
            $(this).removeClass('open');
        }
    });
});

// function isSearchEmpty() {
//     var query = document.getElementById('searchField').value;
//     if ($('#searchField').val().indexOf('#') > -1){
//         console.log("querying data....");
//         console.log(query);
//         $('#search').removeClass('open');
//         $('#searchTerm').append(query);
//
//         var beginQuery = function(item){
//             $ajax({
//                 url: root + '/' + item + '/5',
//                 method: 'GET'
//             }).then(function(data){
//
//             });
//         }
//
//     } else {
//         console.error("No hashtag included in query, firing alert...");
//         alert("ERROR: Please include a '#'");
//     }
// }

function beginQuery(item){
    this.item
    if(isSearchEmpty()){
        alert("please enter a search query!");
    } else {
        $.ajax({
            url: root + '/' + item + '/5',
            method: 'GET'
        }).then(function (data) {
            $('api-output').append(data);
        });
    }
}

function isSearchEmpty() {
    var query = $('#searchField').val();
    if (query.indexOf('#') > -1) {
        console.log("querying data....");
        console.log(query);
        $('#search').removeClass('open');
        $('#searchTerm').append(query);

        return false;
    } else {
        console.error("No hashtag included, fire alert...");
        alert("ERROR: Please include a '#' on searches");

        return true;
    }
}