const galleryImage = document.getElementById('gallery-image');
const imageCounter = document.getElementById('image-counter');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');

const images = [
{src: '/publico/img/muestras/article-html.svg' ,alt: 'Dos corchetes sobre un fondo verde'},
{src: '/publico/img/muestras/article-flexbox.svg' ,alt: 'CSS con flexbox'},
{src: '/publico/img/muestras/article-accessibility.svg' ,alt: 'Un boton con el foco marcado'}
];
let current = 0;
function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  }
  if (index >= images.length) {
    index = 0;
  }
  current = index;
  galleryImage.src = images[current].src;
  galleryImage.alt = images[current].alt;
  imageCounter.textContent = `${current + 1} de ${images.length}`;
}

showImage(0);

prevButton.addEventListener('click', () => {
   showImage(current - 1);
});
nextButton.addEventListener('click', () => {
   showImage(current + 1);
});

const aboutSection = document.querySelector('#about');
const toggleButton = document.querySelector('#toggle-details');

const facts= ['Ingles intermedio', 'Aprendo Rapido', 'Responsable'];
toggleButton.addEventListener('button', () => {
  const list = aboutSection.querySelector('.details');
  if (list) {
    list.remove();
    toggleButton.textContent = 'Más sobre mí';
    toggleButton.setAttribute('aria-expanded', 'false');
    return;
  }
  const newList = document.createElement('ul');
  newList.className = 'details';
  for (const fact of facts) {
    const item = document.createElement('li');
    item.textContent = fact;
    newList.append(item);
  }
  toggleButton.after(newList);
  toggleButton.textContent = 'Menos sobre mí';
  toggleButton.setAttribute('aria-expanded', 'true');
});