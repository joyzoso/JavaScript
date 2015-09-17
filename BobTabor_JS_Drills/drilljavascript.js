/*function rolloverMenu(showHide, menu)
{
    var linkObj = document.getElementById('mainLink');
    var menuObj = document.getElementById(menu);
    if (showHide == 0)
    {
        menuObj.style.display = 'none';
        linkObj.setAttribute('class', 'mainNav');
        linkObj.setAttribute('className', 'mainNav');
    }
    else
    {
        menuObj.style.display = 'block';
        linkObj.setAttribute('class', 'selectedRollover');
        linkObj.setAttribute('className', 'selectedRollover');
    }
}
*/
/*
  function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "username"; 
        var password = "password";
		
		
        if ((un == username) && (pw == password)) {
            return true;
        }
		
		
		
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }
  
  
  */
  
  var feautureImg = document.getElementById("photoSlider");
  var index = 0;
  var imgArry = ["C9JS_Fundamentals/images/bill.jpg", "C9JS_Fundamentals/images/eel.jpg", "C9JS_Fundamentals/images/mountain.jpg"];


	newImage();

	function newImage () {
   feautureImg.setAttribute("src", imgArry[index]);
   index++;
    
    if (index >= imgArry.length) {
       index = 0;  
    }
}

setInterval(newImage, 3000);



