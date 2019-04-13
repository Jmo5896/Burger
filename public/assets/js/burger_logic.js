$(function() {
    $('.devour').on('click', function(event) {
        var id = $(this).data('id');

        $.ajax('/api/burgers' + id, {
            type: 'PUT',
        }).then(function() {
            location.reload();
        });
    });
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurger = {
      burger_name: $("#burgerInput").val().trim(), 
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("added burger");
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });
