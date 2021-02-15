$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').change(function (elm) {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-name')] = $(this).attr('data-id');
      $('.amenities h4').text(Object.keys(amenities));
    } else {
      delete amenities[$(this).attr('data-name')];
    }
    const dataNames = Object.keys(amenities);
    $('.amenities h4').text(dataNames.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  $('.container button').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({}),
      success: function (response) {
        $('SECTION.places').empty();
        response.forEach((element, index) => {
          $('SECTION.places').append(
            `<article>
                <div class="title_box>
                  <h2>${element.name}</h2>
                  <div class="price_by_night">${element.price_by_night}</div>
                </div>
                <div class="information">
                  <div class="max_guest"> ${element.max_guest} Guest(s)</div>
                  <div class="number_rooms">${element.number_rooms} Bedroom(s) </div>
                  <div class="number_bathrooms"> ${element.number_bathrooms} Bathroom(s)
                </div>
                <div class="description"> ${element.description} </div>
            </article>`);
        });
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
});
