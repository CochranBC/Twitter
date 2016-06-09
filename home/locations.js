
var locations = [
  {
    business: 'Saddle Ranch',
    addressOne: '1870 Harbor Blvd',
    addressTwo: ' ',
    city: 'Costa Mesa',
    state: 'CA',
    zip: '92627',
    phone: '(949) 651-8760',
    website: 'http://www.thesaddleranch.com/',
    category: 'Traditional American Steakhouse'
  },
  {
    business: 'Taco Bell',
    addressOne: '3010 El Camino Real',
    addressTwo: ' ',
    city: 'Tustin',
    state: 'CA',
    zip: '92782',
    phone: '(714) 832-1767',
    website: 'https://www.tacobell.com/',
    category: 'Fast Food Mexican Tex-Mex'
  },
  {
    business: 'Chase',
    addressOne: '3978 Barranca Pkwy',
    addressTwo: ' ',
    city: 'Irvine',
    state: 'CA',
    zip: '92606',
    phone: '(949) 559-5072',
    website: 'https://www.chase.com/',
    category: 'Banks'
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

  // <button class="btn btn-default" id="add-business" type="button" value="button">Add Business</button>
  var line = document.createElement('p');
  line.setAttribute('class', 'text-center');

  var buttonText = 'View Profile';

  var profile = document.createElement('button');
  profile.setAttribute('class', 'btn btn-danger');
  profile.setAttribute('id', 'businessProfile');
  profile.setAttribute('type', 'button');
  profile.setAttribute('value', 'button');
  profile.textContent = buttonText;

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
}

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
}
