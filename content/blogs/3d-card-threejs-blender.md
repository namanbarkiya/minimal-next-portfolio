---
title: "3D Card with Embedded Links Using Three.js and Blender"
date: "2023-11-01"
description: "Ever thought your traditional business card could use a serious upgrade? Here's how I used Three.js and Blender to transform a plain business card into an interactive 3D masterpiece with embedded clickable links."
tags: ["Three.js", "Blender", "3D", "JavaScript", "WebGL"]
coverImage: "/projects/card/card_2.webp"
featured: true
readingTime: 7
---

Ever thought your traditional business card could use a serious upgrade? Well, I sure did! Buckle up because I'm about to take you on a mind-bending journey into the world of creativity, innovation, and 3D magic. Welcome to the behind-the-scenes tale of my **Dynamic Portfolio Card** project — where Three.js meets Blender to transform a plain ol' business card into an interactive work of art. 🚀✨

**Live Demo:** [card.nbarkiya.xyz](https://card.nbarkiya.xyz) · **Source Code:** [GitHub](https://github.com/namanbarkiya/3d-portfolio-card)

---

## Let's Jump Right In

Here's a step-by-step guide on how to create this project.

### Step 1 — Setting Up the Project

We'll use [ViteJS](https://vitejs.dev/guide/) with the Vanilla JS template for a fast, modern dev environment:

```bash
npm create vite@latest my-3d-card -- --template vanilla
```

### Step 2 — Installing Essential Libraries

We need two packages: [gsap](https://www.npmjs.com/package/gsap) for smooth animations and [three](https://www.npmjs.com/package/three) for the 3D engine.

```bash
npm i three gsap
```

### Step 3 — Creating the HTML Canvas

Set up your `index.html` file. This is the canvas for the 3D scene and links to our script:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Card | Naman Barkiya</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

---

## Moving Forward with main.js

### Importing Packages

```js
import "./card-style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
```

### Setting Up the Scene and Lighting

A good 3D scene needs layered lighting to look realistic. We set up a front light, back light, mid light and a PointLight:

```js
const scene = new THREE.Scene();
const sizes = { width: window.innerWidth, height: window.innerHeight };

const lightFront = new THREE.DirectionalLight(0xffffff, 0.7);
lightFront.position.set(0, 10, 30);
scene.add(lightFront);

const lightBack = new THREE.DirectionalLight(0xffffff, 0.7);
lightBack.position.set(-30, 10, -30);
scene.add(lightBack);

const lightMid = new THREE.DirectionalLight(0xffffff, 0.7);
lightMid.position.set(30, 10, -30);
scene.add(lightMid);

const pointLight = new THREE.PointLight(0xffffff, 1, 60);
pointLight.position.set(10, 10, 30);
scene.add(pointLight);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 30;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x030712, 1);
renderer.setPixelRatio(2);
```

---

## Building the 3D Card in Blender

Before jumping back into the JavaScript, we need the actual 3D model:

1. **Download the blend file** from [Google Drive assets](https://drive.google.com/drive/folders/1PD-ARQADycua4onoDrL_TAS8PtjiBr4-?usp=sharing)
2. **Customize your card** — use the [Figma template](https://www.figma.com/file/HxFS1r0P6vvxzSMXpipOKk/3D-card-assets?type=design&node-id=0%3A1&mode=design&t=jhsZf7DikFaZknKb-1) to design your own card art
3. In Blender, **replace `card.png` and `logo.png`** in the Shading section with your files
4. Adjust dimensions in the **UV Editing Section**
5. **Export** the model as glTF 2.0 (`.glb`) format

---

## Loading the Model and Embedding Links

The key idea — we define invisible clickable planes/circles that are positioned precisely over the areas on the card where links should exist.

### Define Link Positions

```js
const linkPos = {
  box1: {
    x: 0.7,
    y: 1.21,
    z: 0.03,
    name: "ClickableBox1",
    link: "/naman_barkiya_resume.pdf",
  },
  box2: {
    x: 0.06,
    y: -0.4,
    z: 0.03,
    name: "ClickableBox2",
    link: "https://nbarkiya.xyz",
  },
  circle1: {
    x: -0.46,
    y: -1.06,
    z: 0.03,
    name: "ClickableCircle1",
    link: "https://github.com/namanbarkiya",
  },
  circle2: {
    x: 0.05,
    y: -1.06,
    z: 0.03,
    name: "ClickableCircle2",
    link: "https://www.linkedin.com/in/naman-barkiya-015323200/",
  },
  circle3: {
    x: 0.55,
    y: -1.06,
    z: 0.03,
    name: "ClickableCircle3",
    link: "mailto:naman.barkiya02@gmail.com",
  },
};
```

### Load the Model and Attach Invisible Hit Areas

```js
const loader = new GLTFLoader();
let mesh;

loader.load("/naman_card.glb", (gltf) => {
  mesh = gltf.scene;
  mesh.traverse((child) => {
    if (child.isMesh) child.name = "ClickablePart1";
  });

  const scaleFactor = 5;
  mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
  scene.add(mesh);

  // Invisible box over the resume link area
  const box1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 0.08),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );
  box1.position.set(linkPos.box1.x, linkPos.box1.y, linkPos.box1.z);
  box1.name = linkPos.box1.name;
  mesh.add(box1);

  // Invisible circle over the GitHub icon
  const circle1 = new THREE.Mesh(
    new THREE.CircleGeometry(0.16, 32),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );
  circle1.position.set(linkPos.circle1.x, linkPos.circle1.y, linkPos.circle1.z);
  circle1.name = linkPos.circle1.name;
  mesh.add(circle1);

  // ... repeat for circle2, circle3, box2

  mesh.rotation.y = 0;
  mesh.rotation.z = 0;
  loop();
});
```

---

## Controls: Orbit and Auto-Rotate

```js
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = false;
controls.minPolarAngle = 1.5;
controls.maxPolarAngle = 1.5;
controls.autoRotateSpeed = 3;
```

## Making It Responsive

```js
window.addEventListener("resize", () => {
  sizes.height = window.innerHeight;
  sizes.width = window.innerWidth;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
```

## Raycasting — Opening Links on Click

This is the secret sauce. We use a `THREE.Raycaster` to check if a click intersects with any of the invisible hit meshes, then open the corresponding link:

```js
let autoRotate = false;

canvas.addEventListener("click", (event) => {
  controls.autoRotate = !autoRotate;
  autoRotate = !autoRotate;

  const mouse = {
    x: (event.clientX / sizes.width) * 2 - 1,
    y: -(event.clientY / sizes.height) * 2 + 1,
  };

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Check each clickable object and open its link
  ["circle1", "circle2", "circle3", "box1", "box2"].forEach((key) => {
    const obj = scene.getObjectByName(linkPos[key].name);
    if (obj && raycaster.intersectObject(obj).length > 0) {
      window.open(linkPos[key].link, "_blank");
    }
  });
});
```

## Styles (card-style.css)

```css
:root {
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
}

.clickable-box {
  cursor: pointer;
}
```

---

## Conclusion

Well folks, that's a wrap! We've gone from a plain business card to a jaw-dropping **3D Portfolio Card with embedded links** — all using the power of Three.js and Blender. The invisible raycasting approach for links is the key insight: you can overlay any clickable geometry on your 3D model without modifying the model itself.

Grab the assets, customize the card with your own links and branding, and ship something that'll genuinely wow people.

---

## Useful Links

- 🌐 **Live Demo:** [card.nbarkiya.xyz](https://card.nbarkiya.xyz)
- 💻 **Source Code:** [github.com/namanbarkiya/3d-portfolio-card](https://github.com/namanbarkiya/3d-portfolio-card)
- 🎨 **Figma Assets:** [Figma file](https://www.figma.com/file/HxFS1r0P6vvxzSMXpipOKk/3D-card-assets?type=design&node-id=0%3A1&mode=design&t=jhsZf7DikFaZknKb-1)
- 📦 **Blender + Assets:** [Google Drive](https://drive.google.com/drive/folders/1PD-ARQADycua4onoDrL_TAS8PtjiBr4-?usp=sharing)
