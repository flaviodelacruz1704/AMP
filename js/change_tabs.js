function showSection(section) {
  const details = document.getElementById('details-container');
  const gallery = document.getElementById('gallery-container');
  const infoTab = document.getElementById('product-tab');
  const galleryTab = document.getElementById('images-tab');

  if (!details || !gallery) return;

  if (section === 'info') {
    details.classList.remove('hidden');
    gallery.classList.add('hidden');

    infoTab.classList.add('active');
    galleryTab.classList.remove('active');
  }

  if (section === 'gallery') {
    gallery.classList.remove('hidden');
    details.classList.add('hidden');

    galleryTab.classList.add('active');
    infoTab.classList.remove('active');
  }
}
