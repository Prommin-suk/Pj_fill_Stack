const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
let currentSlide = 0; // ตั้งค่าเริ่มต้นที่สไลด์แรก
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// ฟังก์ชันเปลี่ยนสไลด์
function changeSlide() {
  // คำนวณตำแหน่งที่ควรแสดง
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].offsetWidth; // ความกว้างของสไลด์หนึ่ง
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// ฟังก์ชันไปที่สไลด์ถัดไป
document.getElementById('next-btn').addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % totalSlides; // สลับไปสไลด์ถัดไป
  changeSlide();
});

// ฟังก์ชันไปที่สไลด์ก่อนหน้า
document.getElementById('prev-btn').addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // สลับไปสไลด์ก่อนหน้า
  changeSlide();
});

// เริ่มการแสดงสไลด์แรก
changeSlide();
