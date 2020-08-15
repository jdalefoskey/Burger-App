function addNewBurger (event) {
  event.preventDefault()
  const newBurger = $('#burger')
    .val()
    .trim()

  $.ajax({
    url: '/api/burgers',
    type: 'POST',
    data: { burger_name: newBurger }
  }).then(() => location.reload())
}

function eatBurger () {
  const burgerId = $(this)
    .parent()
    .data().id

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    type: 'PUT'
  }).then(() => location.reload())
}

// event listener
$('#new-burger').click(addNewBurger)
$('.devour-it').click(eatBurger)
