const navClick = (e) =>{
    const prePage = document.querySelector('.active');
    if( prePage.isSameNode(e.target))  return;
    e.target.classList.add('active');
    prePage.classList.remove('active');
}

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)