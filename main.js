import * as THREE from "three";
import { MindARThree } from "mindar-image-three";

document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    // initialize MindAR
    const mindarThree = new MindARThree({
      container: document.body,
      imageTargetSrc: "/assets/targets/Enlightenment.mind",
    });
    const { renderer, scene, camera } = mindarThree;

    // create AR object
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 	0xff0000,
      transparent: false,
      opacity: 0.5,
    });
    //const plane = new THREE.Mesh(geometry, material);
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -2);
  cube.rotation.set(0, Math.PI/4, 0);
    // create anchor
    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(cube);

    // start AR
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };
  start();
});

