 // Example: Smooth scrolling for navigation links
 document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
});





//  const video = document.getElementById("myVideo");
//  const playPauseBtn = document.getElementById("playPauseBtn");
//  const volumeControl = document.getElementById("volumeControl");
//  const fullscreenBtn = document.getElementById("fullscreenBtn");

//  // Play/Pause Logic
//  playPauseBtn.addEventListener("click", () => {
//      if (video.paused) {
//          video.play();
//          playPauseBtn.textContent = "⏸"; // Change to pause icon
//      } else {
//          video.pause();
//          playPauseBtn.textContent = "▶"; // Change to play icon
//      }
//  });

//  // Volume Control
//  volumeControl.addEventListener("input", () => {
//      video.volume = volumeControl.value;
//  });

//  // Fullscreen Mode
//  fullscreenBtn.addEventListener("click", () => {
//      if (video.requestFullscreen) {
//          video.requestFullscreen();
//      } else if (video.mozRequestFullScreen) {
//          video.mozRequestFullScreen();
//      } else if (video.webkitRequestFullscreen) {
//          video.webkitRequestFullscreen();
//      } else if (video.msRequestFullscreen) {
//          video.msRequestFullscreen();
//      }
//  });




// Toggle between Sign In and Sign Up
function toggleForm() {
   const signinForm = document.getElementById('signin-form');
   const signupForm = document.getElementById('signup-form');
   
   signinForm.style.display = (signinForm.style.display === 'none') ? 'block' : 'none';
   signupForm.style.display = (signupForm.style.display === 'none') ? 'block' : 'none';
}

// Sign In logic
function signIn(event) {
   event.preventDefault();
   const email = document.getElementById('signin-email').value;
   const password = document.getElementById('signin-password').value;
   
   // Hardcoded example for sign-in validation
   const validEmail = "user@example.com";
   const validPassword = "password123";

   if (email === validEmail && password === validPassword) {
       alert("Sign In successful");
       window.location.href = 'about:blank';  // Redirect to a blank page
   } else {
       alert("Incorrect email or password");
   }
}

// Sign Up logic
function signUp(event) {
   event.preventDefault();
   const email = document.getElementById('signup-email').value;
   const password = document.getElementById('signup-password').value;
   const confirmPassword = document.getElementById('signup-confirm-password').value;

   if (password !== confirmPassword) {
       alert("Passwords do not match, Enter again");
       return false;
   }

   // Hardcoded example for successful sign-up
   alert("Sign Up successful!");
   window.location.href = 'http://www.nutanshikshaniketan.com/pgallery.html#!';  // Redirect to a blank page
   return true;
}


// Handle Contact Form Submission
document.getElementById('formcontrol').addEventListener('submit', function (event) {
   event.preventDefault();
   let name = event.target.name.value;
   let email = event.target.email.value;
   let message = event.target.message.value;

   const contactMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
   
   // Simulate sending data to Notepad (saving as text file)
   let blob = new Blob([contactMessage], { type: 'text/plain' });
   let link = document.createElement('a');
   link.href = URL.createObjectURL(blob);
   link.download = 'contact-message.txt';
   link.click();
});
