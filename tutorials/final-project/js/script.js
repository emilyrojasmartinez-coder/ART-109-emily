// tut- https://www.youtube.com/watch?v=fo0aYLSrcz8&list=WL&index=1


const data = [

    { name: "./videos/v1.mp4" },
    { name: "./videos/v2.mp4" },
    { name: "./videos/v3.mp4" },
    { name: "./videos/v4.mp4" },
    { name: "./videos/v5.mp4" },
    { name: "./videos/v6.mp4" },
    { name: "./videos/v7.mp4" },
    { name: "./videos/v8.mp4" },
    { name: "./videos/v9.mp4" },
    { name: "./videos/v10.mp4" }

];

const params = {
    rows: 7,
    columns: 7,
    curvature: 5,
    spacing: 10,
    imageWidth: 7,
    imageHeight: 4.5,
    depth: 7.5,
    elevation: 0,
    lookAtRange: 20,
    vertivalCurvature: 0.5,
};

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 40);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffffff);
document.body.appendChild(renderer.domElement);


//debugging tools 
const DEBUG_MODE = false;
let gui;
if (DEBUG_MODE) {
    gui = new data.GUI();
    gui.add(params, "rows", 1, 8).onChange(updateGallery);
    gui.add(params, "columns", 1, 10).onChange(updateGallery);
    gui.add(paraams, "imageWidth", 1, 10).onChange(updateGallery);
    gui.add(params, "imageHeight", 1, 10).onChange(updateGallery);
    gui.add(params, "spacing", 2, 10).onChange(updateGallery);
    gui.add(params, "curvature", 0, 10).onChange(updateGallery);
    gui.add(params, "vertivalCurvature", 0, 2).onChange(updateGallery);
    gui.add(params, "depth", 5, 50).onChange(updateGallery);
    gui.add(params, "elevatio", -10, 10).onChange(updateGallery);
    gui.add(params, "lookAtRange", 5, 50).name("Look Range");
}

const header =document.querySelector(".header");
let headerRotationX = 0;
let headerRotationY = 0;
let Translate = 0;

let mouseX = 0;
let mouseY = 0 ;
let targetX = 0;
let targetY = 0;

const lookAtTarget = new THREE.vector( 0, 0, 0);

function createVideoElement(videoSource){
    const video = document.createElement("video");
    video.src = videoSource;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play ();
    return video;
}
