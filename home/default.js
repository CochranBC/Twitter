
var reviews = [
  {
    name: 'Starbucks',
    reviewer: 'Tom',
    review: 'I enjoy coming here because the staff remembers me by name and they are very courteous. The place is clean and well kept.'
  },
  {
    name: 'La Salsa',
    reviewer: 'Brittney',
    review: 'They have a wide selection of salsas to choose from. My favorite is the avacado. It gets pretty busy for lunch time, so I like the fact that I can call ahead and place my order. Then I do not have to wait in line.'
  },
  {
    name: 'Discount Tire',
    reviewer: 'Sam',
    review: 'Buying tires can be pretty expensive if you come here. The upside is purchasing the warranty. Then whenever something happens to your tire, you can get it replaced for a reasonable price.'
  }
]

var push = document.getElementById('searchbutton');

push.addEventListener('click', function() {
  var results = document.getElementById('results');
  var term = document.getElementById('term');
  var matches = partialMatch(term.value);
  for ( var i = 0; i < matches.length; i++ ) {
    results.appendChild(review(matches[i]))
  };
});

var reviewButton = document.getElementById('review-button');

reviewButton.addEventListener('click', function toggle(reviewButton, form) {
  var form = document.getElementById('review');
  var update = form.className.split(" ");
  var offset = update.indexOf("hide");

  if (offset !== -1) {
    update.splice(offset, 1);
    form.className = update.join(" ");
  } else {
    form.className += " " + reviewButton;
  }
});

var addReview = document.getElementById('add-review');

addReview.addEventListener('click', function() {
  var firstName = document.getElementById('first-name');
  var businessName = document.getElementById('business-name');
  var newCritique = document.getElementById('new-critique');
  var review = {};
  review.reviewer = firstName.value;
  review.name = businessName.value;
  review.review = newCritique.value;
  reviews.push(review);
  console.log(reviews);
})

function partialMatch(text) {
  var suggestions = [];
  for ( var i = 0; i < reviews.length; i = i + 1 ) {
    var offset = reviews[i].name.indexOf(text);
    if (offset === -1) {
    } else {
      suggestions.push(reviews[i]);
    }
  }
  return suggestions;
}

function review(data) {
  var msg = ' wrote a review for ';
  var description = document.createElement('div');

  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-offset-2 col-md-8');

  var panel = document.createElement('div');
  panel.setAttribute('class', 'panel panel-default');

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');

  var paragraph = document.createElement('p');

  var customer = document.createElement('span');
  customer.textContent = data.reviewer;

  var write = document.createElement('span');
  write.textContent = msg;

  var business = document.createElement('span');
  business.textContent = data.name;

  var critique = document.createElement('p');
  critique.textContent = data.review;

  container.appendChild(panel);
  panel.appendChild(panelBody);
  paragraph.appendChild(customer);
  paragraph.appendChild(write);
  paragraph.appendChild(business);
  description.appendChild(paragraph);
  description.appendChild(critique);
  panelBody.appendChild(description);
  return container;
}
