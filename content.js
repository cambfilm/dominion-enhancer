$(window).on('load', function() {
    
    setTimeout(function() {
        $('.mini-card').hover(function() {
            var $card = $(this);
            var $art = $card.find('.mini-card-art');
            console.log($art.css('background-image'));
        });
    }, 5000);

    var $settings_window = $('<div id="de-popup"></div>');
    $settings_window.css( {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '120px',
        height: '40px',
        backgroundColor: '#fff',
        zIndex: '9999999',
        cursor: 'pointer'
    });
    var $window_text = $('<span>Chancellor Mode</span>');
    $settings_window.click(function() {
        enableChancellorMode();
    });
    $settings_window.append($window_text);
    $('body').append($settings_window);
});

function enableChancellorMode() {
    var chancellor = 'https://i.imgur.com/R3Swjnq.jpg';
    var $art = $('.mini-card').find('.mini-card-art');
    console.log($art.css('background-image'));
    $art.css('background-image', 'url(' + chancellor + ')');

    var audio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-21014/zapsplat_sport_air_horn_soccer_blast_tune_21154.mp3');
    audio.play();
}