
var captchaTextBox = document.querySelector(".captch_box input");
var refreshButton = document.querySelector(".refresh_button");
var captchaInputBox = document.querySelector(".captch_input input");
var captchaText = null;
$(document).ready(function () {

  $(".dropDownField").jqxDropDownList({ width: 348, height: 32 });
  $(".text-input").jqxInput({ width: 348, height: 32 });
  $("#user-id").jqxInput({ placeHolder: "Enter UserID" });
  $("#user-pswd").jqxInput({ placeHolder: "Enter Password" });
  $("#mobileNo").jqxInput({ placeHolder: "Enter Mobile Number" });
  $("#OtpForLogin").jqxInput({ placeHolder: "Enter OTP" });

  var CompanyNm = [
    "MAGNUM EQUITY BROKING LIMITED",
    "TRUST GROUP EKYC NBS1920",
    "NIRMAL BANG SECURITIES PVT.LTD NBS1920",
  ];
  $("#company-name").jqxDropDownList({ source: CompanyNm, selectedIndex: 0 });
  $("#btn-Login,#btn-sendOtp,#btn-OtpLogin").jqxButton({
    width: "100%",
    height: 35,
  });
  $("#mobileNo,#OtpForLogin").on("keypress", function (e) {
    if (isNaN(this.value + "" + String.fromCharCode(e.charCode))) {
      return false;
    }
  });
  $(".frgtPswd-link").on("click", function () {
    $("#ModalLabel").text("Forget Password");
    $("#loginOtp-form").css("display", "none");
    $("#frgtPswd-form").css("display", "block");
  });
  generateCaptcha();
  refreshButton.addEventListener("click", refreshBtnClick);
});

function generateCaptcha() {
  var randomString = Math.random().toString(36).substring(2, 7);
  var randomStringArray = randomString.split("");
  var changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchaText = changeString.join("   ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
}

function refreshBtnClick() {
  generateCaptcha();
  captchaInputBox.value = "";
}

