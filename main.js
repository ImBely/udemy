function toggleDropdown () {
    let navbarToggle = document.getElementById("navbar-Toggle") /*we want to do is to store the id that were going to add to our HTML*/ 
    if (navbarToggle.className === 'topnav') { /* Check if the element's class is "topnav" */
        navbarToggle.className += ' responsive'; /* If it's "topnav", add the "responsive" class */
    } else {
        navbarToggle.className = 'topnav'; /* If it's not "topnav", set the class to "topnav" */
    }
}