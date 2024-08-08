/** @format */

$(document).ready(function () {
  const input = document.querySelector("#countrycode");
  window.intlTelInput(input, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.6.1/build/js/utils.js",
    initialCountry: "SA",
  });
  const input2 = document.querySelector("#countrycode2");
  window.intlTelInput(input2, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.6.1/build/js/utils.js",
    initialCountry: "SA",
  });
  const toggleButton = document.getElementById("toggleButton");
  const moreText = document.getElementById("moreText");
  const dots = document.getElementById("dots");

  toggleButton.addEventListener("click", function () {
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      toggleButton.classList.add("show-less");
      toggleButton.textContent = "SHOW LESS"; // Remove arrow text here
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      toggleButton.classList.remove("show-less");
      toggleButton.textContent = "READ MORE"; // Remove arrow text here
    }
  });

  //form validation 1
  $(".countrycode .iti__country").click(function () {
    $("#countrycode").val($(this).attr("data-dial-code"));
  });
  $.validator.addMethod(
    "phonefield",
    function (value, element) {
      return this.optional(element) || /^([0-9]{7,})$/i.test(value);
    },
    "Invalid phone number"
  );
  $.validator.addMethod(
    "email",
    function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Invalid email address"
  );
  $.validator.addMethod(
    "atlerastOneRequired",
    function (value, element) {
      return $('input[name="interestedoptions"]:checked').length > 0;
    },
    "Please select at least one option"
  );
  $.validator.addMethod(
    "atlerastOneRequired2",
    function (value, element) {
      return $('input[name="interestedoptions2"]:checked').length > 0;
    },
    "Please select at least one option"
  );
  $.validator.addMethod(
    "atlerastOneRequired3",
    function (value, element) {
      return $('input[name="marketingpermission"]:checked').length > 0;
    },
    "Please select at least one option"
  );
  $("#trojena-form-1").validate({
    ignore: ".ignore",
    errorElement: "span",
    rules: {
      fname: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      lname: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      phone: {
        required: true,
        minlength: 7,
        maxlength: 14,
        phonefield: true,
      },
      email: {
        required: true,
        minlength: 2,
        maxlength: 100,
        email: true,
      },
      interestedoptions: {
        atlerastOneRequired: true,
      },
      marketingpermission: {
        atlerastOneRequired3: true,
      },
    },
    errorPlacement: function (error, element) {
      error.appendTo($(element).parent());
    },
    messages: {
      fname: {
        required: "This field is required",
        // namefield: "Please enter valid characters"
      },
      phone: {
        required: "This field is required",
        phonefield: "Please enter valid number",
      },
      lname: {
        required: "This field is required",
        // phonefield: "Please enter valid number"
      },
      email: {
        required: "This field is required",
        email: "Please enter valid email",
      },
      interestedoptions: {
        atlerastOneRequired: "Please select atleast one option",
      },
      marketingpermission: {
        atlerastOneRequired3: "Please select atleast one option",
      },
    },
    submitHandler: function () {
      // alert("SUccess")
      // $(".submission-wrap").addClass('show');
      // $('#contactForm')[0].reset();
      // $('.error').remove();
      // console.log();
      return true;
    },
  });
  //form-2 validate
  $("#trojena-form-2").validate({
    ignore: ".ignore",
    errorElement: "span",
    rules: {
      fname2: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      lname2: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      phone2: {
        required: true,
        minlength: 7,
        maxlength: 14,
        phonefield: true,
      },
      email2: {
        required: true,
        minlength: 2,
        maxlength: 100,
        email: true,
      },
      interestedoptions2: {
        atlerastOneRequired2: true,
      },
      marketingpermission: {
        atlerastOneRequired3: true,
      },
    },
    errorPlacement: function (error, element) {
      error.appendTo($(element).parent());
    },
    messages: {
      fname2: {
        required: "This field is required",
        // namefield: "Please enter valid characters"
      },
      phone2: {
        required: "This field is required",
        phonefield: "Please enter valid number",
      },
      lname2: {
        required: "This field is required",
        // phonefield: "Please enter valid number"
      },
      email2: {
        required: "This field is required",
        email: "Please enter valid email",
      },
      interestedoptions2: {
        atlerastOneRequired2: "Please select atleast one option",
      },
      marketingpermission: {
        atlerastOneRequired3: "Please select atleast one option",
      },
    },
    submitHandler: function () {
      // alert("SUccess")
      // $(".submission-wrap").addClass('show');
      // $('#contactForm')[0].reset();
      // $('.error').remove();
      // console.log();
      return true;
    },
  });
});
