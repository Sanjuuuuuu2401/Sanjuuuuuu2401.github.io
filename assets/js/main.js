const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});



let tech_stacks = [
  {
      "teck_name": "Linux",
      "img_link": "assets/img/linux-logo-logo-brands-for-0.png"
    
  },
  {
      "teck_name": "Shell Scripting",
      "img_link": "assets/img/shell Scripting.png"
  },
  {
      "teck_name": "MySQL",
      "img_link": "assets/img/mysql.png"
  },
  {
      "teck_name": "JavaScript",
      "img_link": "assets/img/javascript.png"
  },
  {
      "teck_name": "CSS",
      "img_link": "assets/img/css.png"
  },
  {
      "teck_name": "HTML",
      "img_link": "assets/img/html.png"
  },
  {
      "teck_name": "GitHub",
      "img_link": "assets/img/github1233.png"
  },
  {
      "teck_name": "VS code",
      "img_link": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
  }

]

let techStackDiv = document.getElementById("tech");

let custstackdiv = document.getElementById("customer")


let softdiv = document.getElementById("soft")



tech_stacks.map(tech => {


  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt = tech.teck_name;
  img.className = "pic"
  let name = document.createElement("p");
  name.innerText = tech.teck_name;
  name.className= "naav"

  comp.append(img, name);

  techStackDiv.append(comp);
})

let customer_stacks = [
  {
      "teck_name": "Active Listening",
      "img_link": "assets/img/ActiveListening.png"
    
  },
  {
      "teck_name": "Adaptibility",
      "img_link": "assets/img/Adaptibility.png"
  },
  {
      "teck_name": "Customer Success",
      "img_link": "assets/img/CustomerSuccess.jpg"
  },
  {
      "teck_name": "Technical Assistance",
      "img_link": "assets/img/Technical assistance.png"
  }

]

customer_stacks.map(tech => {


  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt = tech.teck_name;
  img.className = "pic"
  let name = document.createElement("p");
  name.innerText = tech.teck_name;
  name.className= "naav"

  comp.append(img, name);

  custstackdiv.append(comp);
})

let soft_stacks = [
  {
      "teck_name": "Time Management",
      "img_link": "assets/img/time management.png"
    
  },
  {
      "teck_name": "Team Building",
      "img_link": "assets/img/team building.png"
  },
  {
      "teck_name": "Decision Making",
      "img_link": "assets/img/decision making.png"
  },
  {
      "teck_name": "Critical Thinking",
      "img_link": "assets/img/critical thinking.png"
  }

]

soft_stacks.map(tech => {


  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt = tech.teck_name;
  img.className = "pic"
  let name = document.createElement("p");
  name.innerText = tech.teck_name;
  name.className= "naav"

  comp.append(img, name);

  softdiv.append(comp);
})