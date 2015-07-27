$(document).ready(function() {

  $.ajax({
    url: "response.text"
  }).done(function(data) {
    console.log(data);
  })

});