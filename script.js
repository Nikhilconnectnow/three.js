import * as THREE from 'three';
let scene = new THREE.Scene();
let camera= new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1 ,100);
camera.position.z=5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material= new THREE.MeshBasicMaterial({color:"red"});
let mesh = new THREE.Mesh(box,material);
scene.add(mesh);

const canvas = document.getElementById('canvas');
let renderer=new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);

function animation(){
    window.requestAnimationFrame(animation);
    renderer.render(scene,camera);
    mesh.rotation.y+= 0.01;
}

animation();