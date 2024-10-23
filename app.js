// app.js

// Redirect user to Spotify login page when Spotify button is clicked
document.getElementById('spotify-login-btn').addEventListener('click', function() {
  window.location.href = 'https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://yourdomain.com/callback&scope=playlist-read-private';
});

// Redirect user to YouTube login page when YouTube button is clicked
document.getElementById('youtube-login-btn').addEventListener('click', function() {
  window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://yourdomain.com/callback&scope=https://www.googleapis.com/auth/youtube';
});
fetch('https://api.spotify.com/v1/me/playlists', {
  headers: {
      'Authorization': 'Bearer ' + access_token
  }
})
.then(response => response.json())
.then(data => {
  console.log(data); // This will print the user's playlists to the console
});
fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet', {
  method: 'POST',
  headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      snippet: {
          title: "New Playlist",
          description: "Playlist transferred from Spotify",
      }
  })
})
.then(response => response.json())
.then(data => {
  console.log(data); // Playlist created on YouTube
});
