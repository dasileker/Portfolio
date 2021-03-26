const firebaseConfig = {
  apiKey: "AIzaSyBDRdsYaceKYoDHPX6l_lZg39iZgNLBP9Y",
  authDomain: "contact-b6a36.firebaseapp.com",
  databaseURL: "https://contact-b6a36-default-rtdb.firebaseio.com",
  projectId: "contact-b6a36",
  storageBucket: "contact-b6a36.appspot.com",
  messagingSenderId: "164180802897",
  appId: "1:164180802897:web:f983c7ac69ac40da95a770"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const refMessage = firebase.database().ref('messages');

// submit form 

document.querySelector('#contact-form').addEventListener('submit', sendForm);

function sendForm(e) {
  e.preventDefault();


  const name = input('#name');
  const email = input('#email');
  const subject = input('#subject');
  const message = input('#message');
  //save Message
  saveMessage(name, email, subject, message);

};


//get input value 
function input(id) {
  return document.querySelector(id).value;
}

// store message in database

function saveMessage(name, email, subject, message) {
  const newMessageRef = refMessage.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  }).then(() => {
    console.log('Data Saved')
  }).catch((error) => {
    console.log(error)
  });
}



$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

