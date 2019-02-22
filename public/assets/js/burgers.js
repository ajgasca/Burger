$(function () {
    $("#burgerSubmit").on("click", function (event) {

        event.preventDefault();

        let newBurgerName = { newBurgerName: $("#addburger").val().trim() };
        console.log(newBurgerName);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerName
        }).then(function (res) {

            console.log(res);
            location.reload();
        });
    });

    // When a burger is devoured
    $(".devourButton").on("click", function (event) {

        //update the devoured boolean in the database
        let burgerUpdateId = $(this).attr("burger_id");
        $.ajax("/api/burgers/" + burgerUpdateId, {
            type: "PUT"
        }).then(function (res) {

            location.reload();

        });

    });

});
