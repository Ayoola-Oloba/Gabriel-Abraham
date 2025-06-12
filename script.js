function setupModal(pictureId, modalId, closeId, carouselId, prevId, nextId) {
  const Picture = document.getElementById(pictureId);
  const modal = document.getElementById(modalId);
  const closeModal = document.getElementById(closeId);
  const carouselImages = document.querySelectorAll(`#${carouselId} img`);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  let currentIndex = 0;

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  Picture.addEventListener('click', () => {
    modal.classList.add('active');
    showImage(currentIndex);
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Initialize all modals:

setupModal('Picture', 'modal', 'closeModal', 'carousel', 'prevBtn', 'nextBtn');
setupModal('Picture2', 'modal2', 'closeModal2', 'carousel2', 'prevBtn2', 'nextBtn2');
setupModal('Picture3', 'modal3', 'closeModal3', 'carousel3', 'prevBtn3', 'nextBtn3');
setupModal('Picture4', 'modal4', 'closeModal4', 'carousel4', 'prevBtn4', 'nextBtn4');
setupModal('Picture5', 'modal5', 'closeModal5', 'carousel5', 'prevBtn5', 'nextBtn5');
setupModal('Picture6', 'modal6', 'closeModal6', 'carousel6', 'prevBtn6', 'nextBtn6');


//flow

const flowElements = document.querySelectorAll('.flow-in');

function checkVisibility() {
  flowElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');   // Add class when visible
    } else {
      el.classList.remove('visible'); // Remove class when not visible
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

