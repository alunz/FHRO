var el = $('<div>&nbsp;</div>');

el.css('position', 'fixed');
el.css('top', '0px');
el.css('left', '0px');
el.css('height', '1024px');
el.css('width', '2024px');
el.css('background-color', 'white');
el.css('z-index', '3000');

$('body').append(el);

var img = $('<img>');

el.append(img);

var i = setInterval(function() {
    $('.GalleryNav--next').trigger('click');
    img.attr('src', $($('.media-image')[0]).attr('src'));

    var height = $($('.media-image')[0]).data('height');
    var width = $($('.media-image')[0]).data('width');

    if (parseInt(height) > 600) {
        height = 600;
    }
    img.attr('height', height);
}, 3000);
