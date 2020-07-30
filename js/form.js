function ValidateEmail(inputText) {
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat)) {
    alert("Submitted successfully");    //The pop up alert for a valid email address
    document.form1.text1.focus();
    return true;
} else {
alert("You have entered an invalid email address");    //The pop up alert for an invalid email address
document.form1.text1.focus();
return false;
}
}