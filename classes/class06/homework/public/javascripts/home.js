//logout button behavior
var $form = $("login_button");

var onSuccess = function(data, status){
    $('#success_message').html(
        "Your order was submitted. Have a cat picture!" 
    );
    var image = "<img src='images/order_submit_cat.jpg'/>";
    $('#success_image').html(image);
}

var onError = function(data, status) {
    console.log("status", status);
    console.log("error", data);
}

$form.submit(function(event) {
    event.preventDefault();
    $.post("login", $form.serialize())
        .done(onSuccess)
        .error(onError);
});
