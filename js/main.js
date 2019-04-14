(function () {
    var menuIcon = document.getElementById("nav_icon")
    var menuSmall = document.getElementById("nav-small");


    menuIcon.onclick = function () {
	
	
	   menuSmall.style.display = "block";
	
	
    }

// menu closing for mobile

    var closeMenuIcon = document.getElementById("close-menu");

    closeMenuIcon.onclick = function () {
	
        menuSmall.style.display = "none";
	
    }

let top = document.getElementById("top");

top.addEventListener('click', function(){
    window.scrollBy(0, -1 * window.pageYOffset);
})

})();
