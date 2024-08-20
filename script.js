// Toggle icon
const menuIcon = document.querySelector('#hamburger');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section
const sections = document.querySelectorAll('section'); // Menggunakan querySelectorAll untuk memilih semua <section>
const navlinks = document.querySelectorAll('header nav a'); // Menggunakan querySelectorAll untuk memilih semua <a> di dalam navigasi

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; // Typo diperbaiki: "ofset" menjadi "offset"
        let height = sec.offsetHeight; // Typo diperbaiki: "ofsetHeight" menjadi "offsetHeight"
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Aktifkan navbar link
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });

            // Ketika animasi aktif
            sec.classList.add('show-animation');
        } else {
            sec.classList.remove('show-animation');
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Hapus tombol dan navbar ketika di-click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
