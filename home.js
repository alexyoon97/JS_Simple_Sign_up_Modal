window.onload = function () {
  var sign_up_btn = document.getElementById("sign_up_btn");
  var cancel_btn = document.getElementById("modal_cancel");
  var modal = document.getElementById("sign_up_modal");
  var submit_btn = document.getElementById("submit_btn");
  var user_input = document.getElementsByClassName("user_input");

  function modal_toggle_func() {
    if (modal.className == "closed") modal.className = "";
    else modal.className = "closed";
  }


  submit_btn.onclick = function () {
    for (i = 0; i < user_input.length; i++) {
      if (user_input[i].value <= 0) {
        alert("You must fill up the text boxes");
        return;
      }
    }
    alert("You have signed up successfully");
    for (i = 0; i < user_input.length; i++) {
        user_input[i].value = '';
      }
      modal_toggle_func();
  };

  sign_up_btn.onclick = modal_toggle_func;
  cancel_btn.onclick = modal_toggle_func;
  
};
