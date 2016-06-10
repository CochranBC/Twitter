
var locations = [
  {
    business: 'Saddle Ranch',
    addressOne: '1870 Harbor Blvd',
    addressTwo: '',
    city: 'Costa Mesa',
    state: 'CA',
    zip: '92627',
    phone: '(949) 651-8760',
    website: 'http://www.thesaddleranch.com/',
    category: 'Traditional American, Steakhouse',
    tag: 1
  },
  {
    business: 'Taco Bell',
    addressOne: '3010 El Camino Real',
    addressTwo: '',
    city: 'Tustin',
    state: 'CA',
    zip: '92782',
    phone: '(714) 832-1767',
    website: 'https://www.tacobell.com/',
    category: 'Fast Food, Mexican, Tex-Mex',
    tag: 2
  },
  {
    business: 'Chase',
    addressOne: '3978 Barranca Pkwy',
    addressTwo: '',
    city: 'Irvine',
    state: 'CA',
    zip: '92606',
    phone: '(949) 559-5072',
    website: 'https://www.chase.com/',
    category: 'Banks',
    tag: 3
  }
];

var addBusiness = document.getElementById('add-business');
addBusiness.addEventListener('click', function() {
  var newBusiness = document.getElementById('new-business');
  swap('current', newBusiness, 'view');
});

var viewBusinesses = document.getElementById('view-businesses');
viewBusinesses.addEventListener('click', function() {
  var businessesList = document.getElementById('business-listing');
  swap('current', businessesList, 'view');
  showAllBusinesses();
});

var addCompany = document.getElementById('add-company');
addCompany.addEventListener('click', function() {
  var companyName = document.getElementById('company');
  var addressFirst = document.getElementById('address-one');
  var addressSecond = document.getElementById('address-two');
  var cityName = document.getElementById('city');
  var stateName = document.getElementById('state');
  var zipcode = document.getElementById('zip');
  var phoneNumber = document.getElementById('phone');
  var websitePage = document.getElementById('website');
  var categories = document.getElementById('category');

  var location = {};
  location.business = companyName.value;
  location.addressOne = addressFirst.value;
  location.addressTwo = addressSecond.value;
  location.city = cityName.value;
  location.state = stateName.value;
  location.zip = zipcode.value;
  location.phone = phoneNumber.value;
  location.website = websitePage.value;
  location.category = categories.value;
  location.tag = locations.length+1;
  locations.unshift(location);

  var businessList = document.getElementById('business-listing');
  swap('current', businessList, 'view');
  showAllBusinesses();
});


function businessList(data) {
  var repository = document.createElement('div');
  repository.setAttribute('class', 'col-md-offset-3 col-md-6');

  var border = document.createElement('div');
  border.setAttribute('class', 'panel panel-default');

  var borderBody = document.createElement('div');
  borderBody.setAttribute('class', 'panel-body');

  var report = document.createElement('div');
  report.setAttribute('id', 'businessBox');


  var header = document.createElement('h3');
  header.setAttribute('class', 'col-md-12 text-center h3');
  header.textContent = data.business;

  var place = document.createElement('p');
  place.setAttribute('class', 'text-center');


  var comma = ', ';

  var space = ' ';

  var town = document.createElement('span');
  town.textContent = data.city

  var punctuation = document.createElement('span');
  punctuation.textContent = comma;

  var province = document.createElement('span');
  province.textContent = data.state;

  var gap = document.createElement('span');
  gap.textContent = space;

  var zone = document.createElement('span');
  zone.textContent = data.zip;

  var call = document.createElement('p');
  call.setAttribute('class', 'text-center');
  call.textContent = data.phone;

  var line = document.createElement('p');
  line.setAttribute('class', 'text-center');

  var buttonText = 'View Profile';

  var profile = document.createElement('button');
  profile.setAttribute('class', 'btn btn-danger');
  profile.setAttribute('id', data.tag);
  profile.setAttribute('type', 'button');
  profile.setAttribute('value', 'button');
  profile.textContent = buttonText;

  // var companyProfile = document.getElementById('company-profile');
  profile.addEventListener('click', function(e) {
    var businessProfile = document.getElementById('business-profile');
    var designation = e.target.getAttribute('id');
    clear(businessProfile);
    var theBusiness = findBusinessByTag(locations, designation)[0];
    businessProfile.appendChild(businessDepiction(theBusiness));

    // Swap in this view.
    swap('current', businessProfile, 'view');
  });

  repository.appendChild(border);
  border.appendChild(borderBody);
  place.appendChild(town);
  place.appendChild(punctuation);
  place.appendChild(province);
  place.appendChild(gap);
  place.appendChild(zone);
  line.appendChild(profile);
  report.appendChild(header);
  report.appendChild(place);
  report.appendChild(call);
  report.appendChild(line);
  borderBody.appendChild(report);

  return repository;
};
;

function findBusinessByTag(businesses, tag) {
  var businessObject = [];
  for ( var i = 0; i < businesses.length; i = i + 1 ) {
    if ( businesses[i].tag == tag) {
      businessObject.push(businesses[i]);
    }
  }
  return businessObject;
};

function businessDepiction(data) {
  var store = document.createElement('div');
  store.setAttribute('class', 'col-md-offset-3 col-md-6');

  var outline = document.createElement('div');
  outline.setAttribute('class', 'panel panel-default');

  var outlineBody = document.createElement('div');
  outlineBody.setAttribute('class', 'panel-body');

  var record = document.createElement('div');

  var heading = document.createElement('h3');
  heading.setAttribute('class', 'col-md-12 text-center h3');
  heading.textContent = data.business;

  var region = document.createElement('p');

  var mark = ', ';

  var blank = ' ';

  var categoryText = 'Category: '

  var residence = document.createElement('p');
  residence.textContent = data.addressOne;

  var residenceTwo = document.createElement('p');
  residenceTwo.textContent = data.addressTwo;

  var webPage = document.createElement('p');
  webPage.textContent = data.website;

  var suburb = document.createElement('span');
  suburb.textContent = data.city

  var refernce = document.createElement('span');
  refernce.textContent = mark;

  var territory = document.createElement('span');
  territory.textContent = data.state;

  var interlude = document.createElement('span');
  interlude.textContent = blank;

  var sector = document.createElement('span');
  sector.textContent = data.zip;

  var telephone = document.createElement('p');
  telephone.textContent = data.phone;

  var categoryTitle = document.createElement('span')
  categoryTitle.textContent = categoryText;

  var variety = document.createElement('span');
  variety.textContent = data.category;

  store.appendChild(outline);
  outline.appendChild(outlineBody);
  region.appendChild(suburb);
  region.appendChild(refernce);
  region.appendChild(territory);
  region.appendChild(interlude);
  region.appendChild(sector);
  record.appendChild(heading);
  record.appendChild(residence);
  record.appendChild(residenceTwo);
  record.appendChild(region);
  record.appendChild(telephone);
  record.appendChild(webPage);
  record.appendChild(categoryTitle);
  record.appendChild(variety);
  outlineBody.appendChild(record);

  return store;
};

function showAllBusinesses() {
  var businessListing = document.getElementById('business-listing');
  clear(businessListing);
  var message = 'Businesses';
  var title = document.createElement('h2');
  title.setAttribute('class', 'col-md-offset-1 col-md-3 text-right h2');
  title.textContent = message;
  businessListing.appendChild(title);

  for (var i = 0; i < locations.length; i++) {

    businessListing.appendChild(businessList(locations[i]));

  }
};
