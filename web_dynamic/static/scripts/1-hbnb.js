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
}