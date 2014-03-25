var interval;

function move () {
    var el = $('#ball');
    var currentY = parseInt(el.css('top'));
    var currentX = parseInt(el.css('left'));

    var containerWidth = parseInt($('#container').css('width'));
    var containerHeight = parseInt($('#container').css('height'));

    var borderOffset = 1;
    var ballWidth = parseInt($('#ball').css('width')) + borderOffset;
    var ballHeight = parseInt($('#ball').css('height')) + borderOffset;

    if (currentX >= containerWidth - ballWidth || currentY >= containerHeight - ballHeight) {
        clearInterval(interval);
        return;
    }

    el.css('top', currentY + 1);
    el.css('left', currentX + 1);
}

var interval = setInterval(move, 10);