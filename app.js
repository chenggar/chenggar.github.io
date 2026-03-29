const video1 = document.getElementById("project-video1")
const video2 = document.getElementById("project-video2")
const video3 = document.getElementById("project-video3")
const hoverSign = document.querySelector(".hover-sign")

// Sidebar Elements
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const videoList = [video1, video2, video3]

videoList.forEach(function(video) {
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })

    video.addEventListener("mouseout", function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})

// Sidebar Elements
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
    menu.classList.add("hide-menu")
})

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
    menu.classList.remove("hide-menu")
})