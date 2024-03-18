setInterval(() => {
    console.log(`
MADE BY FROXY
    `)
}, 10000);

let meArea = document.getElementById("meArea")
let projectsArea = document.getElementById("projectsArea")
let callArea = document.getElementById("callArea")

//  Me Area // 
function me() {
    document.getElementById('meArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function meAreaCikis() {
    document.getElementById('meArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";
}

// Projects // 

function projects() {
    document.getElementById('projectsArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function projectsAreaCikis() {
    document.getElementById('projectsArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";
}

// Phone //
function phone() {
    document.getElementById('callArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function CallAreaCikis() {
    document.getElementById('callArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";

}
