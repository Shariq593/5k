//For Hambureger Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});





//For Accordian
function toggleAccordion(id) {
    // Close all accordion items
    const accordionItems = document.querySelectorAll('.accordion-content');
    accordionItems.forEach(item => {
        if (item.id !== id) {
            item.classList.add('hidden');
        }
    });

    // Toggle the selected accordion item
    const accordion = document.getElementById(id);
    accordion.classList.toggle('hidden');

    // Toggle the arrow icon
    const arrow = document.getElementById(id + '-arrow');
    arrow.classList.toggle('rotate-180');
} 