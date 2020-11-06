<template>
    <div id="bashpound">
</div>
</template>

<script>
import * as THREE from 'three'

export default {
    mounted() {
    const $bashpound = document.getElementById('bashpound')
    const renderer = new THREE.WebGLRenderer({antialias: true});
    const camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
    const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(300, 300)
renderer.setClearColor(0xffffff, 1)
$bashpound.append(renderer.domElement)


camera.position.z = 200;

const pinkMat = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(255,255,255)"),
  emissive   :  new THREE.Color("rgb(0,0,0)"),
  specular   :  new THREE.Color("rgb(150,150,150)"),
  shininess  :  50,
  flatShading    :  THREE.FlatShading,
  transparent: 1,
  opacity    : 0.7
});

const L1 = new THREE.PointLight( 0x009696, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

const L2 = new THREE.PointLight( 0x006eff, 0.9)
L2.position.z = 200;
L2.position.y = 100;
L2.position.x = -100;
scene.add(L2);



const Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75,0), pinkMat);
Ico.rotation.z = 0.1;
scene.add(Ico);

function update(){
   Ico.rotation.x+=2/80;
   Ico.rotation.y+=2/130;
}

// Render
function render() {
  requestAnimationFrame(render);			
  renderer.render(scene, camera);	
  update();
}

render();
    }
}
</script>

<style scoped>


@keyframes glitch-anim-second {
  0% {
    clip: rect(57px, 9999px, 56px, 0);
  }
  5% {
    clip: rect(54px, 9999px, 88px, 0);
  }
  10% {
    clip: rect(40px, 9999px, 46px, 0);
  }
  15.0% {
    clip: rect(62px, 9999px, 60px, 0);
  }
  20% {
    clip: rect(39px, 9999px, 67px, 0);
  }
  25% {
    clip: rect(35px, 9999px, 37px, 0);
  }
  30.0% {
    clip: rect(2px, 9999px, 39px, 0);
  }
  35% {
    clip: rect(34px, 9999px, 56px, 0);
  }
  40% {
    clip: rect(22px, 9999px, 86px, 0);
  }
  45% {
    clip: rect(37px, 9999px, 28px, 0);
  }
  50% {
    clip: rect(75px, 9999px, 23px, 0);
  }
  55.0% {
    clip: rect(51px, 9999px, 93px, 0);
  }
  60.0% {
    clip: rect(60px, 9999px, 82px, 0);
  }
  65% {
    clip: rect(5px, 9999px, 42px, 0);
  }
  70% {
    clip: rect(91px, 9999px, 53px, 0);
  }
  75% {
    clip: rect(89px, 9999px, 77px, 0);
  }
  80% {
    clip: rect(50px, 9999px, 84px, 0);
  }
  85.0% {
    clip: rect(9px, 9999px, 26px, 0);
  }
  90% {
    clip: rect(61px, 9999px, 48px, 0);
  }
  95% {
    clip: rect(36px, 9999px, 6px, 0);
  }
  100% {
    clip: rect(43px, 9999px, 2px, 0);
  }
}

@keyframes glitch-anim-first {
  0% {
    clip: rect(50px, 9999px, 21px, 0);
  }
  5% {
    clip: rect(17px, 9999px, 52px, 0);
  }
  10% {
    clip: rect(25px, 9999px, 4px, 0);
  }
  15.0% {
    clip: rect(11px, 9999px, 47px, 0);
  }
  20% {
    clip: rect(75px, 9999px, 16px, 0);
  }
  25% {
    clip: rect(63px, 9999px, 88px, 0);
  }
  30.0% {
    clip: rect(71px, 9999px, 17px, 0);
  }
  35% {
    clip: rect(73px, 9999px, 99px, 0);
  }
  40% {
    clip: rect(98px, 9999px, 61px, 0);
  }
  45% {
    clip: rect(75px, 9999px, 59px, 0);
  }
  50% {
    clip: rect(32px, 9999px, 91px, 0);
  }
  55.0% {
    clip: rect(98px, 9999px, 78px, 0);
  }
  60.0% {
    clip: rect(11px, 9999px, 32px, 0);
  }
  65% {
    clip: rect(18px, 9999px, 36px, 0);
  }
  70% {
    clip: rect(72px, 9999px, 46px, 0);
  }
  75% {
    clip: rect(81px, 9999px, 26px, 0);
  }
  80% {
    clip: rect(2px, 9999px, 49px, 0);
  }
  85.0% {
    clip: rect(72px, 9999px, 47px, 0);
  }
  90% {
    clip: rect(63px, 9999px, 24px, 0);
  }
  95% {
    clip: rect(44px, 9999px, 7px, 0);
  }
  100% {
    clip: rect(89px, 9999px, 65px, 0);
  }
}

</style>