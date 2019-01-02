(function() {
var menuIcon = document.getElementById("nav_icon");
var menuSmall = document.getElementById("nav-small");


menuIcon.onclick = function () {
	
	
	menuSmall.style.display = "block";
	
	
}

// menu closing for mobile

var closeMenuIcon = document.getElementById("close-menu");

closeMenuIcon.onclick = function () {
	
	menuSmall.style.display = "none";
	
}

// form validator - checks if the required fileds are filled and if e-mail is correct
	
	function displayErrors (errors, form) {
        
        var p = form.querySelector(".form-errors");
        
        if ( !p ){
            p = document.createElement("p");
        }
        
        p.className = "form-errors";
        p.innerHTML = errors.join("<br>");
        
        
        form.insertBefore(p, form.children[0]);
    }
    
    var form = document.querySelector("#form"), //selects whole form   
        nameField = form.querySelector("input[name='name']"),//selects name filed
        emailField = form.querySelector("input[name='email']"),//selects mail
		phoneField = form.querySelector("input[name='phone']"),
        messageField = form.querySelector("textarea[name='message']");//selects message filed
        
    form.addEventListener("submit", function(e){
        
       e.preventDefault();
        
        var errors = [];
        
       //fileds complement checked 
	   
        if ( nameField.value === "" ){
            errors.push("Please enter your name.");
            nameField.classList.add("invalid_form");}
        else{
            nameField.classList.remove("invalid_form"); 
        }
        
        if ( emailField.value.indexOf("@" ) === -1 || emailField.value.indexOf(".") === -1 ){//jeżeli wisana wartość nie zawiera @ lub .
            errors.push("Please provide correct e-mail address.");
            emailField.classList.add("invalid_form");}
        else{
          emailField.classList.remove("invalid_form");                      
        }
        
		/*if ( phoneField.value == [0-9][0-9] || phoneField.value != ("") ){
			errors.push("Please provide correct phone number.");
            phoneField.classList.add("invalid_form");}
		else{
			phoneField.classList.remove("invalid_form");
		}*/
		
        if ( messageField.value === "" ){
            errors.push("Please enter your message.");
            messageField.classList.add("invalid_form");}
        else{
            messageField.classList.remove("invalid_form"); 
        }
        
        if( errors.length ){            
            displayErrors(errors, form);
        }           
        else{
            form.submit();
        }
        
        
            
        
}, false); 


})();
