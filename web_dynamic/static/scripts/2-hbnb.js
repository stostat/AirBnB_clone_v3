$(document).ready(InputInformation);

function InputInformation () {
  const AmenitiesObj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      AmenitiesObj[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete AmenitiesObj[$(this).attr('data-name')];
    }
    const names = Object.keys(AmenitiesObj);
    $('.amenities h4').text(names.sort().join(', '));
  });

  apiStatus();
}

/* code for task 3  request Api*/
function apiStatus () {
  $.get('http://0.0.0.0:5001/api/v1/status/', (data, textStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}