const firebaseConfig = {
  apiKey: "AIzaSyBGq967Asv50A57kg_OTqwl6x16IEHmZLY",
  authDomain: "zerradi.firebaseapp.com",
  databaseURL: "https://zerradi-default-rtdb.firebaseio.com",
  projectId: "zerradi",
  storageBucket: "zerradi.appspot.com",
  messagingSenderId: "978402640387",
  appId: "1:978402640387:web:aeaf18dfe59ae192c20436"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const refMessage = firebase.database().ref('contact-info');

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

  sendMessage(name, email, subject, message);

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

function sendMessage() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "dasileker@gmail.com",
    Password: "password",
    To: 'zerradi.amine@hotmail.com',
    From: "dasileker@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );

}


