function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function() {
  var errorMsg = "";
  var fieldsMissing = "";

  // checks if fields are missing
  if ($("#email").val() == "") {
    fieldsMissing += "<br>Email";
  }
  if ($("#phone").val() == "") {
    fieldsMissing += "<br>Telephone";
  }
  if ($("#password").val() == "") {
    fieldsMissing += "<br>password";
  }
  if ($("#passwordConfirm").val() == "") {
    fieldsMissing += "<br>Confirm Password";
  }

  if (fieldsMissing != "") {
    errorMsg += "<p>The following field(s) are missing:" + fieldsMissing;
  } else {
    // check if fields are valid
    if (isEmail($("#email").val()) == false) {
      errorMsg += "<p>Your email address is not valid</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
      errorMsg += "<p>Your Phone number is not valid</p>";
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
      errorMsg += "<p>Your passwords don't match</p>";
    }
  }

  if (errorMsg != "") {
    $("#errorMessage").html(errorMsg);
  } else {
    $("#successMessage").show();
    $("#errorMessage").hide();
  }
});
