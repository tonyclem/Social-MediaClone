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
const fontSizes = document.querySelectorAll(".choose-size");

// remove active class Form all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    // Added class of active
    item.classList.add("active");
    // condition to check if we click the notification button
    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      // if the notify is click display block
      document.querySelector(".notifications-popup").style.display = "block";
      //   if the notify is click hidden the notify-count
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
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ======================= Theme Customization

// Open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

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
fontSizes.forEach((size) => {
  let fontSize;

  if (size.classList.contains("font-size-1")) {
    fontSize = "10px";
  } else if (size.classList.contains("font-size-2")) {
    fontSize = "13px";
  } else if (size.classList.contains("font-size-3")) {
    fontSize = "16px";
  } else if (size.classList.contains("font-size-4")) {
    fontSize = "19px";
  } else if (size.classList.contains("font-size-5")) {
    fontSize = "22px";
  }

  //    change font size of the root html element
  document.querySelector("html").style.fontSize = fontSize;
});
