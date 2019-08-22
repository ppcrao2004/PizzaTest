$(document).ready(function() {
    $.ajax({
        url: "http://104.239.141.95:8081/api/template/list/Jukeslot-USA-Northeast-NJ-SITE_1",
        type: 'GET',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        crossDomain: true,
        headers: {

                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
                'Access-Control-Allow-Credentials': 'true'
            }
    }).then(function(data) {
            console.log("success");
            console.log(responce);
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});