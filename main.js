import * as THREE from "three";
import './style.css'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import * as dat from 'dat.gui'
// import { SpotLight } from "three";

//import dat
const gui = new dat.GUI()

//importing Object
const loader = new GLTFLoader();

let gear;
loader.load( 'assets/untitled.gltf', function ( gltf ) {
  gear = gltf.scene
  gear.rotation.set(1.6,0,-0.5)
  gui.add(gear.rotation,'z').min(-3).max(3).step(0.1)

	scene.add(gltf.scene);
  console.log("loaded")
}, undefined, function ( error ) { 
	console.error( error );
} );


//Scene
const scene = new THREE.Scene();
/**
 * Lights
 */
 const directionalLight = new THREE.DirectionalLight("#fffff",2)
 directionalLight.position.set(1,1,5)
 scene.add(directionalLight)


//Sizes
const sizes ={
  width:window.innerWidth,
  height:window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 1, 1000 );
camera.position.z = 5
scene.add( camera );

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas,alpha:true})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

/**
 * Scroll
 */
 let scrollY = window.scrollY

 window.addEventListener('scroll',()=>{
   scrollY = window.scrollY
 
 })

//Animate


// const controls = new OrbitControls(camera,canvas)

const loop = ()=>{

  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)

  gear.rotation.y = scrollY/sizes.height*0.5
  


}
loop()