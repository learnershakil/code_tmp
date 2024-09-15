import * as THREE from 'three';

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#9ca3af');

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create the renderer
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#4ade80', emissive: 'black' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add the lighting
const light = new THREE.DirectionalLight(0x9CBA6, 10);
light.position.set(1,1,1);
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();