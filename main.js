window.onload = () => {
  document.location.hash = "";
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
// window.dispatchEvent(new Event('resize'));
// $(window).trigger('resize');

let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector(".overlay");
let navb = document.querySelector(".links");
let navli = document.querySelectorAll("a");
const removeNav = function () {
  overlay.classList.remove("active");
  navb.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.classList.remove("active");
};
hamburger.addEventListener("click", function () {

  hamburger.classList.toggle("active");
  navb.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.classList.toggle("active");

  overlay.onclick = function () {
    removeNav();
  };

  navli.forEach(li => li.addEventListener('click', removeNav));
});


var typed = new Typed(".job", {
  strings: ["Data Scientist", "ML Engineer","AI Engineer"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
})




// start darkmode
let tog = 0;
let dark = document.querySelector('#darkmode')
dark.addEventListener("click", () => {
  document.body.classList.toggle('darkmode')
  tog = !tog;
})
const exp = document.querySelector('.type')
const contact = document.querySelector('.contact')
const proj = document.querySelectorAll('.slider')
const options = {
  root: null,
  threshold: .6,
  rootMargin: '0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > options.threshold && !tog) {
      document.body.classList.add('darkmode');
      document.querySelector('.header').classList.add("active");
      document.querySelector('.header').classList.add("red");
    }
  });
}, options)
observer.observe(exp)
observer.observe(contact)
proj.forEach((pro) => observer.observe(pro))


const ab = document.querySelector('#ab')
const about = document.querySelector('.about')
const options1 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !tog) {
      document.querySelector('.header').classList.add("active");
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.remove("red");
    }
  });
}, options1)
observer1.observe(about)
observer1.observe(ab)

const intro = document.querySelector('.stop')
const options3 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.remove('darkmode');
      document.querySelector('.header').classList.remove("active");
      removeNav();
    }
  });
}, options3)
observer3.observe(intro)

// end darkmode
//animation

const options5 = {
  root: null,
  rootMargin: '0px',
  threshold: .7
};
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // about.classList.add("active");
      window.dispatchEvent(new Event('resize'));


    }
  });
}, options5)
observer5.observe(about)

// let bord = document.querySelectorAll('.bord');
// let j = 0;
// let f2 = 0;
// const flipp = () => {
//   bord.forEach((item) => {
//     item.classList.remove("active");
//   })
//   bord[j].classList.add("active");
//   j = j + 1;
//   j %= bord.length;
// }
// const projects = document.querySelector(".proj");
// const flip = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > options.threshold) {
//       j = 0;
//       if (!f2) {
//         var timer = setInterval(flipp, 1700);
//         f2 = 1
//       }
//     }
//   });
// }, options)
// flip.observe(projects)

let sk = document.querySelectorAll('.sk');
let i = 0;
const green = () => {
  sk.forEach((item) => {
    item.classList.remove("active");
  })
  sk[i].classList.add("active");
  i = i + 1;
  i %= sk.length;
}
const skill = document.querySelector('.type')
let f = 0;
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".projects",
  start: "top center",
  end: "top 100px",
  onEnter: () => {
    i = 0;
    if (!f) {
      var timer = setInterval(green, 700);
      f = 1
    }
  }
  // markers: true
});
// const options2 = {
//   root: null,
//   rootMargin: '0px',
//   threshold: .6
// };
// let f = 0;
// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > options.threshold) {
//       i = 0;
//       if (!f) {
//         var timer = setInterval(green, 700);
//         f = 1
//       }
//     }
//   });
// }, options2)
// observer2.observe(skill)





window.addEventListener('scroll', reveal);
function reveal() {
  // console.log(1);
  var reveals = document.querySelector(".about .special-heading");
  var windowheight = window.innerHeight;
  var revealtop = reveals.getBoundingClientRect().top;
  var revealpoint = 150;
  var par = 1;
  if (revealtop < windowheight - revealpoint) {
    about.classList.add('active');
    setTimeout(function () { document.querySelectorAll('.section').forEach(section => section.classList.add('active')) }, 200)
    setTimeout(function () { document.querySelectorAll('.section').forEach(section => section.classList.add('op')) }, 300)
    if (par) {
      window.dispatchEvent(new Event('resize'));
      par = 0;
    }

  }

}






let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  itemActive %= countItem;
  showSlider();
}
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000)
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  // active new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  })
})


// gsap
const windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 767) {
  gsap.from('nav a', {
    duration: 1, opacity: 0, delay: .4,
    stagger: .4
  });
}
gsap.from(".parallax .content div", {
  opacity: 0,
  duration: .6,
  y: 300,
  stagger: .4
})