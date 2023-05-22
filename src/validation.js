function validate() {
    
    var a = document.myform.fname.value;
    if (a === "") {
        alert("First name is empty");
        document.myform.fname.focus();
        return false;
    }
    if (!isNaN(a)) {
        alert("Only entered numbers");
        document.myform.fname.select();
        return false;
    }
    var b = document.myform.lname.value;
    if (b === "") {
        alert("Last name is empty");
        document.myform.lname.focus();
        return false;
    }
    if (!isNaN(b)) {
        alert("Only entered numbers");
        document.myform.lname.select();
        return false;
    }

    var d = document.myform.mail.value;
    if (d === "") {
        alert("please, Enter your mail id!!!");
        document.myform.mail.focus();
        return false;
    }
    var atposition = d.indexOf("@");
    var dotposition = d.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= d.length) {
        alert("please enter valid mail address!!!!");
        return false;
    }
    var gender = document.myform.gender;
    if (gender.selectedIndex === 0) {
        alert("select the gender");
        document.myform.gender.focus();
        return false;
    }

    
    var m = document.myform.mno.value;
    if (m === "") {
        alert("please, Enter your moblie number!!!");
        document.myform.mno.focus();
        return false;
    }
    else if (m.length < 10 || m.length > 10) {
        alert("please enter only 10 digits!");
        document.myform.mno.focus();
        return false;
    }

    var ins = document.myform.ins.value;
    if (ins === "") {
        alert("Institution name is empty");
        document.myform.inss.focus();
        return false;
    }
    if (!isNaN(ins)) {
        alert("Only entered numbers");
        document.myform.ins.select();
        return false;
    }

    var p = document.myform.pass.value;
    if (p === "") {
        alert("please, Enter your password!!!");
        document.myform.pass.focus();
        return false;
    }
    var cp = document.myform.cpass.value;
    if (cp === "") {
        alert("please, Enter your password!!!");
        document.myform.cpass.focus();
        return false;
    }
    if (p !== cp) {
        alert("Password not matched please enter correct one!!!!");
        document.myform.cpass.focus();
        return false;
    }
    return true;
}
export default validate;