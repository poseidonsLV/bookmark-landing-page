function illustrationSwitch() {
  const illustration1 = document.querySelector(".more-info.tab-1");
  const illustration2 = document.querySelector(".more-info.tab-2");
  const illustration3 = document.querySelector(".more-info.tab-3");

  features = document.querySelectorAll("#col");
  features.forEach((item) => {
    item.addEventListener("click", function () {
      features.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      if (item.children[0].className.includes("tab-1")) {
        illustration1.classList.add("active");
        illustration2.classList.remove("active");
        illustration3.classList.remove("active");
      } else if (item.children[0].className.includes("tab-2")) {
        illustration1.classList.remove("active");
        illustration3.classList.remove("active");
        illustration2.classList.add("active");
      } else if (item.children[0].className.includes("tab-3")) {
        illustration1.classList.remove("active");
        illustration2.classList.remove("active");
        illustration3.classList.add("active");
      }
    });
  });
}
illustrationSwitch();

function questions() {
  question = document.querySelectorAll("#questions-row");
  question.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.className.includes("active")) {
        return item.classList.remove("active");
      }
      item.classList.add("active");
    });
  });
}
questions();

function contactUs() {
  //  CONTACT US INPUT
  let emailInput = document.querySelector(".contact-form-input");
  let submitForm = document.querySelector(".contact-form");
  let errorIcon = document.querySelector(".err-img");
  let emailMsg = document.querySelector(".input-msg");

  submitForm.addEventListener("submit", submitEmail);

  function submitEmail(e) {
    e.preventDefault();
    if (
      emailInput.value.length < 6 ||
      (emailInput.value.includes("@") !== true &&
        emailInput.value.length >= 6) ||
      emailInput.value.includes("/")
    ) {
      errorIcon.classList.add("active");
      emailMsg.style.color = "hsl(0, 94%, 75%)";
      emailMsg.innerText = "Looks like this is not email";
    } else {
      errorIcon.classList.remove("active");
      emailMsg.style.color = "hsl(140, 87%, 55%)";
      emailMsg.innerText = "Successfully sent email";
      setTimeout(() => {
        emailMsg.classList.remove("succ");
        emailMsg.innerText = "";
      }, 3000);
    }
  }
}

contactUs();

function navbar() {
  const hamburger = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".nav");

  hamburger.addEventListener("click", openMenu);

  function openMenu() {
    if (menu.className.includes("active")) {
      return menu.classList.remove("active");
    }
    menu.classList.add("active");
  }
}
navbar();
