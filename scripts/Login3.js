$(document).ready(function () {
  var CompanyNm = [
    "MAGNUM EQUITY BROKING LIMITED",
    "TRUST GROUP EKYC NBS1920",
    "NIRMAL BANG SECURITIES PVT.LTD NBS1920",
  ];

  var login_type = ["All", "CDSL", "NSDL"];
  $(".dropDownField").jqxDropDownList({ width: 300, height: 32 });
  $(".text-input").jqxInput({ width: 200, height: 32 });
  $("#company-name").jqxDropDownList({ source: CompanyNm, selectedIndex: 0 , dropDownHeight: 120});
  $("#login-type").jqxDropDownList({ source: login_type, selectedIndex: 0,dropDownHeight: 85 });
  $("#user-id").jqxInput({ placeHolder: "Enter UserID" });
  $("#user-pswd").jqxInput({ placeHolder: "Enter Password" });
  $("#btn-Login,#btn-OtpLogin").jqxButton({
    width: 250,
    height: 33,
  });
  $("#btn-loginOtp,#btn-AccOpen,#btn-UnlockId,#btn-frgtPswd").jqxButton({
    width: 250,
    height: 33,
    imgPosition: "left",
    textPosition: "center",
    textImageRelation: "imageBeforeText",
  });
  $("#backoffc_radiobtn").jqxRadioButton({
    width: 180,
    checked: true,
    theme: "energyblue",
  });
  $("#terminal_radiobtn").jqxRadioButton({
    width: 180,
    theme: "energyblue",
  });
  $("#btn-loginOtp").jqxButton({ imgSrc: "../images/OTP.png" });
  $("#btn-AccOpen").jqxButton({ imgSrc: "../images/New.png" });
  $("#btn-UnlockId").jqxButton({ imgSrc: "../images/Lock-Information.png" });
  $("#btn-frgtPswd").jqxButton({ imgSrc: "../images/login-otp.png" });
  $("#mobileNo").jqxInput({ placeHolder: "Enter Registered Mobile Number" });
  $("#OtpForLogin").jqxInput({ placeHolder: "Enter OTP" });
  $(".modal-textCtrl").jqxInput({ width: "100%", height: 32 });
  $("#btn-sendOtp").jqxButton({
    width: "100%",
    height: 35,
  });
  var captchaTextBox = document.querySelector(".captch_box input");
  var refreshButton = document.querySelector(".refresh_button");

  // Generate a captcha when the page loads
  generateCaptcha(captchaTextBox);
  refreshButton.addEventListener("click", refreshBtnClick);
  $("#btn-loginOtp").click(function (event) {
    $('#Modal').modal('show');
    $(".modal-title").text("Login with OTP");
    $(".frgtPswd-form").css('display','none');
    $(".loginOtp-form").css('display','block');
  });

  $("#btn-frgtPswd").click(function (event) {
    $('#Modal').modal('show');
    $(".modal-title").text("Forget Password");
    $(".frgtPswd-form").css('display','block');
    $(".loginOtp-form").css('display','none');
  });
  
});
function openLoginInfo() {
  // $(".form").css("left", "-7%");
  $(".box-info").css("z-index", "1");
  $(".bi-info").css("opacity", "0.01");
  $(".box-info").css("left", "28%");
}

function closeLoginInfo() {
  $(".box-info").css("z-index", "0");
  $(".bi-info").css("opacity", "1");
  // $(".form").css("left", "0px");
  $(".box-info").css("left", "-5px");
}

function generateCaptcha(captchaTextBox) {
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  captchaText = captcha.join(" ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
}

function refreshBtnClick() {
  var captchaInputBox = document.querySelector(".captch_input input");
  var captchaTextBox = document.querySelector(".captch_box input");
  generateCaptcha(captchaTextBox);
}