
function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://be2719.rcr22.ams01.cdn255.com/hls2/01/03158/k73f6td892ku_o/index-v1-a1.m3u8?t=muYiR2x0HZGUvDxYaKcqAHLxqlxhyBc6_bYciyuIeQg&s=1733085794&e=10800&f=35410536&srv=03&asn=8167&sp=4000&p=');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
        document.title = url;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
        document.title = url;
    }
}

var url = window.location.href.split("#")[1];
play_stream(url);
