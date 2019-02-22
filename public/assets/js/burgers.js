$(function() {
    $(".eaten").on("click", function(event) {
      var id = $(this).data("id");
      var eatenBurger = $(this).data("eatenburger");
  
      var eatenBurger = {
        devoured: eatenBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenBurger
      }).then(
        function() {
          console.log("changed eaten status to", eatenBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Ordered a burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  