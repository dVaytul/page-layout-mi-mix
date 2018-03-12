$(document).ready(function() {
  $(".rotated-item").brazzersCarousel();
});

function changePhoneView(value) {
 function changeView (showThis, hideThis, andHideThis) {
   $(showThis).removeClass("view-image--hidden");
   $(hideThis).addClass("view-image--hidden");
   $(andHideThis).addClass("view-image--hidden");
 }

  switch (value) {
    case 'black':
      changeView("#phone-black", "#phone-white", "#phone-3d");
      break;
    case 'white':
      changeView("#phone-white", "#phone-black", "#phone-3d");
      break;
    case '360':
      changeView("#phone-3d", "#phone-black", "#phone-white");
      break;
  }
}

function handleSubmit(event, username, phone) {
  event.preventDefault();
  if(validatePhone(phone)) {
    //alert(username + ' ' + phone);
    /*$.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $("#modal__form").serialize(),
      success: function() {
      }
    });*/

    $('.modal__response').show();

    setTimeout(function() {
      var inputName = document.getElementById("username");
      var inputPhone = document.getElementById("phone");
      inputName.value = inputPhone.value = '';

      $('#callModal').modal('hide');
      $('.modal__response').hide();
    }, 2000);
  }
}

function validatePhone(phone) {
  var phoneInput = document.getElementById("phone");

  if(!phone || !phone.match(/375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}/) ) {
    phoneInput.classList.remove("is-valid");
    phoneInput.classList.add("is-invalid");
    return false;
  } else {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.add("is-valid");
    return true;
  }
}