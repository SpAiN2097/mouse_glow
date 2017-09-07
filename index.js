const mouseGlow = (element, background) => {
  let lightColor = "fff";
  let gradientSize = 5;
  const el = document.querySelector(element);
  let backgroundclr = background;
  el.addEventListener("mousemove", e => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    let xy = x + " " + y;
    let bgWebKit =
      "-webkit-gradient(radial, " +
      xy +
      ", 0, " +
      xy +
      ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " +
      background;
    let bgMoz =
      "-moz-radial-gradient(" +
      x +
      "px " +
      y +
      "px 45deg, circle, " +
      lightColor +
      " 0%, " +
      background +
      " " +
      gradientSize +
      "px)";

    el.style.background = bgWebKit;
    el.style.background = bgMoz;
  });
  el.addEventListener("mouseleave", e => {
    e.target.style.background = backgroundclr;
  });
};

export default mouseGlow
