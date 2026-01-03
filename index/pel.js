const music = document.getElementById('xmas-music');
const btn = document.getElementById('music-btn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "⏸"; // Shorter "Pause" icon
    btn.classList.add('playing');
  } else {
    music.pause();
    btn.innerHTML = "🎵"; // Shorter "Play" icon
    btn.classList.remove('playing');
  }
});