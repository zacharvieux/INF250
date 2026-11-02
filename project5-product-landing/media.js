// Keep a visible placeholder until the corresponding user-provided image exists.
document.querySelectorAll('.photo img').forEach((img) => {
  const reveal = () => {if (img.naturalWidth > 0) img.closest('.photo').classList.add('loaded');};
  img.addEventListener('load', reveal);
  if (img.complete) reveal();
});
const mark = document.querySelector('#header-img');
if (mark) {
  const show = () => {if (mark.naturalWidth > 0) mark.classList.add('loaded');};
  mark.addEventListener('load', show); if(mark.complete) show();
}
const promo=document.querySelector('#video');
if(promo) {
  const ready=()=>{if(promo.readyState>=1) promo.closest('.video-shell').classList.add('loaded');};
  promo.addEventListener('loadedmetadata',ready); if(promo.readyState>=1)ready();
}
