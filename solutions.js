// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
document.getElementById('sidebar-left')
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('Pages')  document.getElementsByClassName('Groups')
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let sidebar = document.getElementById('sidebar-left').getElementsByTagName('h5')[0]
sidebar.innerHTML = "Least Favs"
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let ads = document.getElementById('sidebar-right').getElementsByClassName('ads')[0]
ads.style.visibility = "hidden";

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
ads.style.visibility = "visible";
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.getElementsByClassName('ad-slot')[0].setAttribute('src', 'http://placebear.com/200/300')
// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName("media-body")[4].innerText = "WOO now THIS is Podracing!"
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let posts = document.getElementById("list-of-posts")
let specificPost = posts.getElementsByTagName("li")[0]
specificPost.classList.add("post-liked")

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
let posts = document.getElementById("list-of-posts")
let secondPost = posts.getElementsByTagName("li")[4]
secondPost.classList.add("post-shared")
