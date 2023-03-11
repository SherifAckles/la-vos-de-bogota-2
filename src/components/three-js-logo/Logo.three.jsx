import * as THREE from "three";

function ThreeLogo() {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.current.clientWidth / mount.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#222222");
    renderer.setSize(mount.current.clientWidth, mount.current.clientHeight);
    mount.current.appendChild(renderer.domElement);

    const loader = new THREE.FontLoader();

    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      function (font) {
        const textGeometry = new THREE.TextGeometry("Three.js", {
          font: font,
          size: 5,
          height: 1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.5,
          bevelSize: 0.5,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        const textMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
        });
        const text = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(text);
        camera.position.z = 15;

        const animate = function () {
          requestAnimationFrame(animate);
          text.rotation.x += 0.01;
          text.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      }
    );
  }, []);

  return <div ref={mount} />;
}

export default ThreeLogo;
