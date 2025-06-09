
  const Picture = document.getElementById('Picture');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const carouselImages = document.querySelectorAll('#carousel img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

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

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  const Picture2 = document.getElementById('Picture2');
  const modal2 = document.getElementById('modal2');
  const closeModal2 = document.getElementById('closeModal2');
  const carouselImages2 = document.querySelectorAll('#carousel2 img');
  const prevBtn2 = document.getElementById('prevBtn2');
  const nextBtn2 = document.getElementById('nextBtn2');

//   let currentIndex = 0;

  Picture2.addEventListener('click', () => {
    modal2.classList.add('active');
    showImage(currentIndex);
  });

  closeModal2.addEventListener('click', () => {
    modal2.classList.remove('active');
  });

  prevBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages2.length) % carouselImages2.length;
    showImage(currentIndex);
  });

  nextBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages2.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    carouselImages2.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  const Picture3 = document.getElementById('Picture3');
  const modal3 = document.getElementById('modal3');
  const closeModal3 = document.getElementById('closeModal3');
  const carouselImages3 = document.querySelectorAll('#carousel3 img');
  const prevBtn3 = document.getElementById('prevBtn3');
  const nextBtn3 = document.getElementById('nextBtn3');

//   let currentIndex = 0;

  Picture3.addEventListener('click', () => {
    modal3.classList.add('active');
    showImage(currentIndex);
  });

  closeModal3.addEventListener('click', () => {
    modal3.classList.remove('active');
  });

  prevBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages3.length) % carouselImages3.length;
    showImage(currentIndex);
  });

  nextBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages3.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    carouselImages3.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }


  const Picture4 = document.getElementById('Picture4');
  const modal4 = document.getElementById('modal4');
  const closeModal4 = document.getElementById('closeModal4');
  const carouselImages4 = document.querySelectorAll('#carousel4 img');
  const prevBtn4 = document.getElementById('prevBtn4');
  const nextBtn4 = document.getElementById('nextBtn4');

//   let currentIndex = 0;

  Picture4.addEventListener('click', () => {
    modal4.classList.add('active');
    showImage(currentIndex);
  });

  closeModal4.addEventListener('click', () => {
    modal4.classList.remove('active');
  });

  prevBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages4.length) % carouselImages4.length;
    showImage(currentIndex);
  });

  nextBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages4.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    carouselImages4.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  const Picture5 = document.getElementById('Picture5');
  const modal5 = document.getElementById('modal5');
  const closeModal5 = document.getElementById('closeModal5');
  const carouselImages5 = document.querySelectorAll('#carousel5 img');
  const prevBtn5 = document.getElementById('prevBtn5');
  const nextBtn5 = document.getElementById('nextBtn5');

//   let currentIndex = 0;

  Picture5.addEventListener('click', () => {
    modal5.classList.add('active');
    showImage(currentIndex);
  });

  closeModal5.addEventListener('click', () => {
    modal5.classList.remove('active');
  });

  prevBtn5.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages5.length) % carouselImages5.length;
    showImage(currentIndex);
  });

  nextBtn5.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages5.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    carouselImages5.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  const Picture6 = document.getElementById('Picture6');
  const modal6 = document.getElementById('modal6');
  const closeModal6 = document.getElementById('closeModal6');
  const carouselImages6 = document.querySelectorAll('#carousel6 img');
  const prevBtn6 = document.getElementById('prevBtn6');
  const nextBtn6 = document.getElementById('nextBtn6');

//   let currentIndex = 0;

  Picture6.addEventListener('click', () => {
    modal6.classList.add('active');
    showImage(currentIndex);
  });

  closeModal6.addEventListener('click', () => {
    modal6.classList.remove('active');
  });

  prevBtn6.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages6.length) % carouselImages6.length;
    showImage(currentIndex);
  });

  nextBtn6.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages6.length;
    showImage(currentIndex);
  });

  function showImage(index) {
    carouselImages6.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }
