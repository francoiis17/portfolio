$(document).ready(function () {
  emailjs.init("2C-bR3RTS7PQ38lGk");
  const serviceID = "service_f0j2ejl";
  const templateID = "template_nabp60h";
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const params = {
      name: document.getElementById("name").value,
      subject: document.getElementById("subject").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    sendEmail(serviceID, templateID, params);
  });

  function sendEmail(serviceID, templateID, params) {
    emailjs.send(serviceID, templateID, params).then(
      (res) => {
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("buttonSubmit").disabled = true;
        console.log(res);
        alert("Tu correo fue enviado exitosamente!!");
      },
      (error) => {
        console.log("failed...", error);
      }
    );
  }

  // Get the modal
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img1 = document.getElementById("myImg1");
  img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var img2 = document.getElementById("myImg2");
  img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var img3 = document.getElementById("myImg3");
  img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var img4 = document.getElementById("myImg4");
  img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var img5 = document.getElementById("myImg5");
  img5.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  document.getElementById("email").addEventListener("input", function (event) {
    campo = event.target;
    emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailRegex.test(campo.value)) {
      document.getElementById("buttonSubmit").disabled = false;
    } else {
      document.getElementById("buttonSubmit").disabled = true;
    }
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn1 i").toggleClass("active");
  });

  $(".home .home-content a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn1").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn1 i").toggleClass("active");
  });

  new Typed(".typing", {
    strings: [
      "Comprometido",
      "Responsable",
      "Enfocado",
      "Motivado",
      "Flexible",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  /*   new Typed(".typing-2", {
    strings: [
      "Motivado",
      "Enfocado",
      "Comprometido",
      "Flexible",
      "Responsable",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  }); */

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
