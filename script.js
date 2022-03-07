// ========================== Sidebar
const menuItems = document.querySelectorAll(".menu-item");

// =========================== Message
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// ====================== Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// remove active class Form all menu items Notification
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// for notification bar
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // calling the remove active function
    changeActiveItem();
    // Added class of active
    item.classList.add("active");
    // condition to check if we click the notification button
    if (item.id !== "notifications") {
      // selected notifications-popup form html files, and set it to display none when the notify isn't click
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      // if the notify is click display block
      document.querySelector(".notifications-popup").style.display = "block";
      // if the notify is click hidden the notify-count
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ================== Messages =========================
const searchMessage = () => {
  // change every value to lower-case
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    //   select h5 tags and the context inside
    const name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// search chat
messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  // added boxShadow to massage box
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  // messageNotification display none
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ======================= Theme Customization

// Open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// close modal function
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// close modal
themeModal.addEventListener("click", closeThemeModal);

// open modal
theme.addEventListener("click", openThemeModal);

// ================= Fonts  ===============================

// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    // added active to button
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty(" --sticky-top-left", "5.4rem");
      root.style.setProperty(" --sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty(" --sticky-top-left", "5.4rem");
      root.style.setProperty(" --sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty(" --sticky-top-left", "2rem");
      root.style.setProperty(" --sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty(" --sticky-top-left", "-5rem");
      root.style.setProperty(" --sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty(" --sticky-top-left", "-12rem");
      root.style.setProperty(" --sticky-top-right", "-35rem");
    }
    //    change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// Change Primary colors
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // Remove active class from colors
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    // Active to change the active color
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// theme Background value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";

  // add active class
  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

// Bg3
Bg3.addEventListener("click", () => {
  lightColorLightness = "0%";
  whiteColorLightness = "10%";
  darkColorLightness = "95%";

  // add active class
  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
