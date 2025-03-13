const flipbook = document.querySelector('.flipbook');
const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPage = 0;

updateFlipbook();
updateButtons();

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
  } else {
    currentPage = pages.length - 1; 
  }
  updateFlipbook();
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
  } else {
    currentPage = 0; 
  }
  updateFlipbook();
});


function updateFlipbook() {
  pages.forEach((page, index) => {
    page.classList.toggle('visible', index === currentPage);
  });
  updateButtons();
}

function updateButtons() {
  prevBtn.disabled = false; 
  nextBtn.disabled = false; 
}
