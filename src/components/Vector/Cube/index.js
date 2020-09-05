import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import sound1 from '../beep-attention.mp3';
import sound2 from '../xns60z_ui-137.wav';

import './index.css';

const styles = (theme) => ({
  root: {
    position: 'relative',
    width: 170,
    height: 170,
    margin: '10px auto',
    '& canvas': {
      position: 'absolute',
      top: 0,
      left: 0,
      border: '0px dotted white',
    },
  },
  framed: { border: '1px dotted white!important' },
});

class Cube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User1',
    };

    this.dom = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.material2 = null;
    this.material3 = null;
    this.material4 = null;
    this.cube = null;
    this.cube2 = null;
    this.cube3 = null;
    this.cube4 = null;
    this.rx = null;
    this.ry = null;
    this.rz = null;

    this.sound1 = new Audio(sound1);
    this.sound2 = new Audio(sound2);

    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    this.delay(3200).then(() => this.start());
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  start() {
    console.log('[CUBE]');
    this.delay(0).then(() => this.sound2.play());
    this.delay(300).then(() => this.animate());
  }

  animate() {
    this.scene = new window.THREE.Scene();
    this.camera = new window.THREE.PerspectiveCamera(75, 100 / 100, 1, 10000);

    this.renderer = new window.THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(170, 170);
    this.dom.appendChild(this.renderer.domElement);

    this.geometry = new window.THREE.BoxGeometry(100, 100, 100, 2, 2, 2);
    this.material = new window.THREE.MeshBasicMaterial({
      //   color: 0xffffff,
      color: new window.THREE.Color().setHSL(2 / 8, 0, 1),
      opacity: 0.5,
      transparent: true,
      wireframe: true,
    });
    this.material2 = new window.THREE.MeshPhongMaterial({
      color: new window.THREE.Color().setHSL(60 / 360, 0.85, 0.76),
      opacity: 0.65,
      transparent: true,
    });
    this.material3 = new window.THREE.MeshPhongMaterial({
      color: new window.THREE.Color().setHSL(2 / 8, 1, 0.5),
      opacity: 0.75,
      transparent: true,
    });
    this.material4 = new window.THREE.MeshPhongMaterial({
      color: new window.THREE.Color().setHSL(2 / 8, 0, 1),
      opacity: 0.75,
      transparent: true,
    });
    this.cube = new window.THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);

    this.cube2 = new window.THREE.Mesh(this.geometry, this.material2);
    // this.scene.add(this.cube2);

    this.cube3 = new window.THREE.Mesh(this.geometry, this.material3);

    this.cube4 = new window.THREE.Mesh(this.geometry, this.material4);

    //this.cube2.position.set(100, 100, 100);

    this.camera.position.z = 5000;

    const that = this;
    function addLight(...pos) {
      const color = 0xffffff;
      const intensity = 1;
      const light = new window.THREE.DirectionalLight(color, intensity);
      light.position.set(...pos);
      that.scene.add(light);
    }
    addLight(-1, 2, 4);
    addLight(1, -1, -2);

    function render() {
      requestAnimationFrame(render);

      //that.rx += 0.02;
      that.ry += 0.025;
      //that.rz += 0.02;

      that.cube.rotation.x = that.rx;
      that.cube.rotation.y = that.ry;
      that.cube.rotation.z = that.rz;

      that.cube2.rotation.x = that.rx;
      that.cube2.rotation.y = that.ry;
      that.cube2.rotation.z = that.rz;

      that.cube3.rotation.x = that.rx;
      that.cube3.rotation.y = that.ry;
      that.cube3.rotation.z = that.rz;

      that.cube4.rotation.x = that.rx;
      that.cube4.rotation.y = that.ry;
      that.cube4.rotation.z = that.rz;

      if (that.camera.position.z > 1500) {
        that.camera.position.z -= 200;
      }
      if (that.camera.position.z > 700) {
        that.camera.position.z -= 100;
      }
      if (that.camera.position.z > 200) {
        that.camera.position.z -= 50;
      }

      that.renderer.render(that.scene, that.camera);
    }

    render();

    let t = this.props.delay;
    let inc = 20;
    let count = 0;
    while (count < 7) {
      setTimeout(() => {
        this.scene.add(this.cube4);
      }, (t += inc));
      setTimeout(() => {
        this.scene.remove(this.cube4);
      }, (t += inc));
      count++;
    }
    setTimeout(() => {
      this.scene.add(this.cube2);
    }, (t += inc));
    setTimeout(() => {
      this.scene.remove(this.cube2);
    }, (t += 3000));
    count = 0;
    while (count < 7) {
      setTimeout(() => {
        this.scene.add(this.cube4);
      }, (t += inc));
      setTimeout(() => {
        this.scene.remove(this.cube4);
      }, (t += inc));
      count++;
    }

    setTimeout(() => {
      setInterval(() => {
        let t = 100;
        let inc = 20;
        let count = 0;
        while (count < 7) {
          setTimeout(() => {
            this.scene.add(this.cube4);
          }, (t += inc));
          setTimeout(() => {
            this.scene.remove(this.cube4);
          }, (t += inc));
          count++;
        }
        setTimeout(() => {
          this.scene.add(this.cube2);
        }, (t += inc));
        setTimeout(() => {
          this.scene.remove(this.cube2);
        }, (t += 3000));
        count = 0;
        while (count < 7) {
          setTimeout(() => {
            this.scene.add(this.cube4);
          }, (t += inc));
          setTimeout(() => {
            this.scene.remove(this.cube4);
          }, (t += inc));
          count++;
        }
      }, 5000);
    }, this.props.delay);
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        className={`${classes.root} ${this.props.framed ? classes.framed : ''}`}
        ref={(el) => {
          this.dom = el;
        }}
      ></div>
    );
  }
}

export default withStyles(styles)(Cube);
