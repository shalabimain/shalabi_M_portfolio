document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;

function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
   mediaPlayer.controls = false;
}

function togglePlayPause() {
   var btn = document.getElementById('play-pause-button');
   if (mediaPlayer.paused || mediaPlayer.ended) {
      btn.title = 'pause';
      btn.innerHTML = 'pause';
      btn.className = 'pause';
      mediaPlayer.play();
   }
   else {
      btn.title = 'play';
      btn.innerHTML = 'play';
      btn.className = 'play';
      mediaPlayer.pause();
   }
}

function changeButtonType(btn, value) {
   btn.title = value;
   btn.innerHTML = value;
   btn.className = value;
}

function changeVolume(direction) {
   if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
   else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
   mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}


