
var reviews = [
  {
    name: 'Starbucks',
    reviewer: 'Tom',
    review: 'I enjoy coming here because the staff remembers me by name and they are very courteous. The place is clean and well kept.',
    score: 2
  },
  {
    name: 'La Salsa',
    reviewer: 'Brittney',
    review: 'They have a wide selection of salsas to choose from. My favorite is the avacado. It gets pretty busy for lunch time, so I like the fact that I can call ahead and place my order. Then I do not have to wait in line.',
    score: 3
  },
  {
    name: 'Discount Tire',
    reviewer: 'Sam',
    review: 'Buying tires can be pretty expensive if you come here. The upside is purchasing the warranty. Then whenever something happens to your tire, you can get it replaced for a reasonable price.',
    score: 5
  }
];


// Event Listeners
var push = document.getElementById('searchbutton');
push.addEventListener('click', function() {
  var results = document.getElementById('results');
  clear(results);
  var term = document.getElementById('term');
  var matches = partialMatch(term.value);
  for ( var i = 0; i < matches.length; i++ ) {
    results.appendChild(review(matches[i]));
  };
  // Swap in this view.
  swap('current', results, 'view');
});

var reviewButton = document.getElementById('review-button');
reviewButton.addEventListener('click', function toggle(reviewButton, form) {
  var form = document.getElementById('review');
  swap('current', form, 'view');
});

var home = document.getElementById('home');
home.addEventListener('click', function() {
  var recentReview = document.getElementById('recent-reviews');
  swap('current', recentReview, 'view');
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
  reviews.unshift(review);

  var recentReview = document.getElementById('recent-reviews')
  swap('current', recentReview, 'view');
  showAllReviews();
});

// First get the element that contains the Stars
var theStars = document.getElementById('star');

// Listen for mouse over events on the stars.
theStars.addEventListener('mouseover', function(theEvent) {
  // Get the individual stars.
  var stars = theStars.getElementsByTagName('span');
  //Get the rating for the star that was moused over
  var rating = theEvent.target.getAttribute('id');

  //Go through all the stars
  for (var i = 0; i < stars.length; i++) {

    //If the star that was moused over's rating
    // is higher than the current star, fill it
    if (rating > i) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    } else {
      stars[i].classList.add('fa-star-o');
      stars[i].classList.remove('fa-star');
    }
  };
});

// Functions
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
};

function review(data) {
  console.log(data.score);
  var msg = ' wrote a review for ';
  var description = document.createElement('div');

  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-offset-2 col-md-8');

  var panel = document.createElement('div');
  panel.setAttribute('class', 'panel panel-default');

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');

  var paragraph = document.createElement('p');

  var starP = document.createElement('p');

  // Takes a rating and returns star elements with correct classes.
  function makeStars(rating) {
    // Create an array to store the elements we are making.
    var theStars = [];

    // Loop through and create 5 star elements.
    for (var i = 0; i < 5; i++) {

      var theStar = document.createElement('span');

      // Set the correct class to style this star as full or empty.
      if (rating > i) {
        var theClass = 'fa-star';
      } else {
        var theClass = 'fa-star-o';
      }
      theStar.setAttribute('class', 'fa ' + theClass + ' fa-3x');
      theStar.setAttribute('id', i + 1);

      // After we create the element push it into the array we plan to return.
      theStars.push(theStar);
    }

    // Return the array of star elements with the correct style classes.
    return theStars;
  }

  // Call the function we created above with the current data.score value.
  var starElements = makeStars(data.score);

  // Take the returned array of elements and append them to the DOM.
  for (var i = 0; i < starElements.length; i++) {
    starP.appendChild(starElements[i]);
  }

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
  description.appendChild(starP);
  description.appendChild(critique);
  panelBody.appendChild(description);
  return container;
};

function swap(current, next, location) {
  var old = document.getElementsByClassName(current)[0];
  old.classList.remove('current');
  old.classList.add('hide');

  var theLocation = document.getElementById(location);
  theLocation.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
}

function showAllReviews() {
  var recentReview = document.getElementById('recent-reviews');
  clear(recentReview);
  for (var i = 0; i < reviews.length; i++) {
    recentReview.appendChild(review(reviews[i]));
  }
}

function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}

// Run on page load.

// Show reviews when page loads.
showAllReviews();
