$(document).ready(function () {
  var CompanyNm = [
    "MAGNUM EQUITY BROKING LIMITED",
    "TRUST GROUP EKYC NBS1920",
    "NIRMAL BANG SECURITIES PVT.LTD NBS1920",
  ];
  $(".dropDownField").jqxDropDownList({ width: 300, height: 32 });
  $(".text-input").jqxInput({ width: 300, height: 32 });
  $("#company-name").jqxDropDownList({ source: CompanyNm, selectedIndex: 0 });
  $("#user-id").jqxInput({ placeHolder: "Enter UserID" });
  $("#user-pswd").jqxInput({ placeHolder: "Enter Password" });
  $("#btn-Login,#btn-OtpLogin").jqxButton({
    width: 250,
    height: 33,
  });
  $("#btn-OtpLogin,#btn-AccOpen,#btn-UnlockId").jqxButton({
    width: 250,
    height: 33,
    imgPosition: "left",
    textPosition: "center",
    textImageRelation: "imageBeforeText",
  });
  $("#btn-OtpLogin").jqxButton({ imgSrc: "../images/OTP.png"});

  $("#btn-AccOpen").jqxButton({ imgSrc: "../images/New.png"});

  $("#btn-UnlockId").jqxButton({ imgSrc: "../images/Lock-Information.png"});
  
});
