let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sendToWhatsApp(event) {
    event.preventDefault(); // Mencegah form dari pengiriman biasa

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Nama: ${fullName}%0AEmail: ${email}%0ANomor Telepon: ${phoneNumber}%0ASubjek: ${subject}%0APesan: ${message}`;
    const whatsappUrl = `https://wa.me/6287784976891?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank'); // Membuka WhatsApp di tab baru
}

function toggleContent(event) {
    event.preventDefault(); // Mencegah link berpindah halaman
    
    let extraContent = document.getElementById("extra-content");
    let button = event.target; // Tombol yang diklik

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block"; // Tampilkan teks tambahan
        button.textContent = "Read Less"; // Ubah teks tombol
    } else {
        extraContent.style.display = "none"; // Sembunyikan teks tambahan
        button.textContent = "Read More"; // Ubah kembali teks tombol
    }
}
