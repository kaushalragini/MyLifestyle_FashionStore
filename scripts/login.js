// const forms = document.querySelector(".forms"),
//   pwShowHide = document.querySelectorAll(".eye-icon"),
//   links = document.querySelectorAll(".link");
// pwShowHide.forEach((eyeIcon) => {
//   eyeIcon.addEventListener("click", () => {
//     let pwFields =
//       eyeIcon.parentElement.parentElement.querySelectorAll(".password");
//     pwFields.forEach((password) => {
//       if (password.type === "password") {
//         password.type = "text";
//         eyeIcon.classList.replace("bx-hide", "bx-show");
//         return;
//       }
//       password.type = "password";
//       eyeIcon.classList.replace("bx-show", "bx-hide");
//     });
//   });
// });
// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     // preventing form submit
//     forms.classList.toggle("show-signup");
//   });
// });

const submitForm = document.querySelector("#loginForm");
submitForm.addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    const uName = document.querySelector("#uName").value;
    const pWrd = document.querySelector("#pWord").value;
    console.log(uName, pWrd);
    if (uName === "test@test.com" && pWrd === "test") {
      // localStorage.setItem("loggedIn", true)
      window.location.assign("../index.html");
      console.log("logged in successfull");
    } else {
      alert("incorrect credentials");
    }
  } catch (err) {
    console.log(err);
  }
});
