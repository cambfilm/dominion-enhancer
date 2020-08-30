var AUDIO = {
    gasp: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-blastwave-fx/Blastwave_FX_CrowdGasp_BW.61631.mp3',
    horns: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-21014/zapsplat_sport_air_horn_soccer_blast_tune_21154.mp3',
    saucy: [
        'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_human_voice_male_english_saucy_flirtatious_ohh_hello_001_17491.mp3',
        'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_human_voice_male_english_saucy_flirtatious_ohh_hello_002_17492.mp3',
        'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_human_voice_male_english_saucy_flirtatious_ohh_hello_003_17493.mp3'
    ]
};
var IMAGES = {
    chancellor: 'https://i.imgur.com/R3Swjnq.jpg'
};
var saucy_interval = null;
var SAUCY_TIME = 270000; //  3 mins.

$.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
};

$(window).on('load', function() {
    var $settings_window = $('<div id="de-popup"></div>');
    var $window_text = $('<span>Chancellor Mode</span>');
    $settings_window.click(function() {
        enableChancellorMode();
    });
    $settings_window.mouseover(function() {
        var audio = new Audio(AUDIO.gasp);
        audio.play();
    });
    $settings_window.append($window_text);
    $('body').append($settings_window);
});

function enableChancellorMode() {
    var chancellor = IMAGES.chancellor;
    var $art = $('.mini-card').find('.mini-card-art');
    // $art.css('background-image', 'url(' + chancellor + ')');

    var audio = new Audio(AUDIO.horns);
    audio.play();

    var saucies = [];

    saucy_interval = setInterval(() => {
        var saucy_audio = new Audio(getSaucy());
        saucy_audio.play();
        console.log('start saucy');
        
        var $saucy_chancellor = $art.random(saucies);
        saucies.push($saucy_chancellor);

        $saucy_chancellor.addClass('saucy');
        $saucy_chancellor.css('background-image', 'url(' + chancellor + ')');

        $(saucy_audio).on('ended', function() {
            $saucy_chancellor.removeClass('saucy');
            $saucy_chancellor.css('background-image', 'url(' + nonsaucy_bg + ')');
        });
    }, SAUCY_TIME);
}

function getSaucy() { 
    return AUDIO.saucy[ AUDIO.saucy.length * Math.random() << 0 ];
}