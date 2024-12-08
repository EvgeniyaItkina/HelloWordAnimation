"use strict";
const helloWorldElements = [
    document.getElementById('hello-world1'),
    document.getElementById('hello-world2'),
    document.getElementById('hello-world3'),
    document.getElementById('hello-world4'),
    document.getElementById('hello-world5'),
    document.getElementById('hello-world6'),
    document.getElementById('hello-world7'),
    document.getElementById('hello-world8'),
    document.getElementById('hello-world9'),
    document.getElementById('hello-world10'),
];
//hight and width of screen
const width = window.innerWidth;
const height = window.innerHeight;
//function to show hello world
function helloWorld(element) {
    //create random position for hello world
    const x = Math.floor(Math.random() * (width - 100));
    const y = Math.floor(Math.random() * (height - 50));
    console.log("x", x);
    console.log("y", y);
    console.log("width", width);
    console.log("height", height);
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    //show hello world
    element.style.visibility = 'visible';
    element.style.opacity = '1';
    element.style.textShadow = '0 0 20px rgba(255, 255, 255, 1)';
    element.style.transform = 'translateY(0)';
    element.style.transform = 'scale(1)';
    //hide hello world after 500ms
    const timeRender = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
        //hide hello world during 500ms from CSS
        element.style.opacity = '0';
        setTimeout(() => {
            // hide hello world div 
            element.style.visibility = 'hidden';
            element.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            element.style.transform = 'translateY(20px)';
            element.style.transform = 'scale(0.8)';
        }, 500);
    }, timeRender);
}
//recall function every 2 seconds
helloWorldElements.forEach((element, index) => {
    const interval = Math.floor(Math.random() * 2000) + 1000;
    setInterval(() => helloWorld(element), interval);
});
