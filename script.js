const upload = document.querySelector('#photo-upload');
const gallery = document.querySelector('#photo-grid');

upload.addEventListener('change', (event) => {
  const images = [...event.target.files].filter((file) => file.type.startsWith('image/'));
  images.forEach((file) => {
    const card = document.createElement('figure');
    card.className = 'user-photo';
    card.innerHTML = `<img alt="Shop photo: ${file.name}"><button type="button" aria-label="Remove ${file.name}">×</button>`;
    const image = card.querySelector('img');
    image.src = URL.createObjectURL(file);
    card.querySelector('button').addEventListener('click', () => {
      URL.revokeObjectURL(image.src);
      card.remove();
    });
    gallery.prepend(card);
  });
  upload.value = '';
});

document.querySelector('#year').textContent = new Date().getFullYear();
