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
        
        //var p = document.createElement("p");
        var p = form.querySelector(".form-errors");
        
        if ( !p ){
            p = document.createElement("p");
        }
        
        p.className = "form-errors";
        p.innerHTML = errors.join("<br>");
        
        
        form.insertBefore(p, form.children[0]);
    }
    
    var form = document.querySelector("#form"), //pobiera cały formularz    
        nameField = form.querySelector("input[name='name']"),//pobiera imię
        emailField = form.querySelector("input[name='email']"),//pobiera email
        messageField = form.querySelector("textarea[name='message']");//pobiera email
        
    form.addEventListener("submit", function(e){
        
       e.preventDefault();
        
        var errors = [];
        
       //sprawdzanie czy pola są uzupełnione poprawnie:
        if ( nameField.value === "" ){
            errors.push("Podaj imię.");
            nameField.classList.add("invalid_form");}
        else{
            nameField.classList.remove("invalid_form"); 
        }
        
        if ( emailField.value.indexOf("@" ) === -1 || emailField.value.indexOf(".") === -1 ){//jeżeli wisana wartość nie zawiera @ lub .
            errors.push("Podaj poprawy adres e-mail.");
            emailField.classList.add("invalid_form");}
        else{
          emailField.classList.remove("invalid_form");                      
        }
        
        if ( messageField.value === "" ){
            errors.push("Wpisz wiadomość.");
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
