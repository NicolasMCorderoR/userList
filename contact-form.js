const BUTTON_VIEW_CONTACT = document.querySelector("#button-view-contact");

if (localStorage.getItem("hasSubscribed")) {
  BUTTON_VIEW_CONTACT.disabled = false;
}

document.querySelector("#contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  let userName = document.querySelector("#text-user").value;
  const USER_EMAIL = document.querySelector("#email-user").value;
  const USER_MASSAGE = document.querySelector("#textarea-user").value;

  const USERNAME = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const EXISTING_USER = users.find(user => user.email === USER_EMAIL);

  if (EXISTING_USER) {
    EXISTING_USER.messages.push(USER_MASSAGE);
  } else {
    users.push({ name: USERNAME, email: USER_EMAIL, messages: [USER_MASSAGE], });
  }
  
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("hasSubscribed", "true");

  BUTTON_VIEW_CONTACT.disabled = false;

  document.querySelector("#contact-form").reset();
});

BUTTON_VIEW_CONTACT.addEventListener("click", function () {
  window.location.href = "./contact-list.html";
});
