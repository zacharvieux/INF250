// Show user-uploaded images when available; retain styled placeholders otherwise.
document.querySelectorAll('.image-shell img').forEach((img) => {
  const reveal = () => {
    if (img.naturalWidth > 0) img.parentElement.classList.add('ready');
  };
  img.addEventListener('load', reveal);
  if (img.complete) reveal();
});
