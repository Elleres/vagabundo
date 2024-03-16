document.getElementById('yesBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('image').src = 'Gato dançando (Gif).gif';
    document.getElementById('audio').src = 'DayNigthMorning - Funny Dancing Kids.mp3';
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('image').src = 'lobotriste.jpg';
    document.getElementById('audio').src = 'Humanfobia - Sue\'s Nightmare.mp3';
  });
  