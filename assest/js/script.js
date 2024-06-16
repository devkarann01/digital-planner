
// Search Bar code start

document.addEventListener("DOMContentLoaded", function() {
	// const searchBtn = document.querySelector(".mob-search-btn");
	const searchicon = document.querySelector(".search-icon");
	const searchBar = document.querySelector(".search-form");
	const crossBtn = document.querySelector(".cross-icon");
	searchicon.addEventListener("click", function() {
		searchBar.classList.toggle("search-bar-show");
		searchicon.style.display = "none";
		crossBtn.style.display = "block";
	});
	crossBtn.addEventListener("click", function() {
		searchBar.classList.remove("search-bar-show");
		searchicon.style.display = "block";
		crossBtn.style.display = "none";
	});
});

// Search Bar code end


// toggle sidebar code start

function toggleButtons() {
    const toggleBtn = document.querySelector('.toggle-slide-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const headerUl = document.querySelector('header ul');
    if (headerUl.style.transform !== 'translateX(0%)') {
        headerUl.style.transform = 'translateX(0%)';
        toggleBtn.style.display = 'none';
        cancelBtn.style.display = 'block';
    } else {
        headerUl.style.transform = 'translateX(-100%)';
        toggleBtn.style.display = 'block';
        cancelBtn.style.display = 'none';
    }
}

// toggle sidebar code end


// DropDown code Start

document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll("header ul li");

    function toggleDropdown(e) {
        var dropdownParent = e.currentTarget;

        dropdowns.forEach(function(dropdown) {
            if (dropdown !== dropdownParent) {
                dropdown.classList.remove("showMenu");
            }
        });

        dropdownParent.classList.toggle("showMenu");
    }
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", toggleDropdown);
    });
});

// DropDown code end