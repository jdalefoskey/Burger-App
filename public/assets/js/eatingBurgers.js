// * callback functions
function addNewBurger(event) {
  event.preventDefault();
  const newBurger = $("#burger").val().trim(); // get text from input-no whitespace
  // add new burger to db & reload (default for submit button)
  $.ajax({
    url: "/api/burgers",
    type: "POST",
    data: { burger_name: newBurger },
  }).then(() => location.reload());
}

function eatBurger() {
  const burgerId = $(this).parent().data().id; // id of burger to be devoured
  // change devoured column of burgerId to true
  $.ajax({
    url: `/api/burgers/${burgerId}`,
    type: "PUT",
  }).then(() => location.reload());
}

// * event listeners
$("#new-burger").click(addNewBurger); // new burger form submition
$(".devour-it").click(eatBurger); // devour it buttons
