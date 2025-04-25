const toggleBtn = document.getElementById('toggleButton');
const drawer = document.getElementById('contactDrawer');
const wrapper = document.getElementById('toggleWrapper');

function openDrawer() {
  drawer.classList.add('open');
  wrapper.classList.add('shifted');

  toggleBtn.innerHTML = `Close <i class="fa-solid fa-circle-xmark close-icon"></i>`;
  }

  

function closeDrawer() {
  drawer.classList.remove('open');
  wrapper.classList.remove('shifted');
  toggleBtn.innerText = 'Contact Me';
}

toggleBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  if (drawer.classList.contains('open')) {
    closeDrawer();
  } else {
    openDrawer();
  }
});

document.addEventListener('click', function(e) {
  if (
    !drawer.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    closeDrawer();
  }
});
