export default class Animate {
  static hello() {
    console.log('[HELLO]', this);
    //window.gsap.to('.r1', { duration: 1, attr: { x: '50%', y: '50%' } });
    let set1 = {
      duration: 0.05,
      ease: 'steps(1)',
      fill: 'rgba(255,255,255,1)',
    };
    let set2 = {
      duration: 0.05,
      ease: 'steps(1)',
      fill: 'rgba(255,255,255,0)',
    };

    var count = 0;
    while (count < 10) {
      this.tl.to(this.r1, set1);
      this.tl.to(this.r1, set2);
      count++;
    }
    count = 0;

    this.tl.to(this.r1, set1);

    // this.tl.to(this.r1, { x: 10, scale: 1.2, fill: 'rgba(255,255,255,.5)' });
    // this.tl.to(this.r1, { y: 10, scale: 1.3 });
  }
}