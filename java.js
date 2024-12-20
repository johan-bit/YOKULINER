// Define popup content for each box (including image URLs)
const popupContents = {
    1: {
      content: 'Masakan Jawa adalah salah satu warisan budaya yang kaya akan cita rasa tradisional. Masakan Jawa umumnya pada hidangan yang berasal dari Jawa Tengah, Daerah Istimewa Yogyakarta, dan Jawa Timur di Indonesia. Masakan ini dikenal dengan cita rasanya yang beragam, mulai dari manis, gurih, pedas, hingga sedikit asam. Penggunaan bumbu dan rempah-rempah yang khas juga menjadi ciri penting dalam masakan Jawa. Contoh makanan nya seperti Soto ayam, Nasi Liwet, Garang asem dan masih banyak lagi',
      image: 'nasi liwet.jpg' 
    },
    2: {
      content: 'Masakan Sumatra terkenal dengan rasa pedas dan penggunaan rempah yang kuat. Pengaruh budaya Melayu, India, dan Arab juga terlihat dalam beberapa hidangannya. Setiap daerah di Sumatra memiliki karakteristik masakan yang berbeda, namun secara umum, penggunaan santan, cabai, dan berbagai bumbu rempah seperti kunyit, jahe, lengkuas, ketumbar, dan jintan sangat dominan.',
      image: 'mie aceh.jpg' 
    },
    3: {
      content: 'Masakan Bali memiliki keunikan dengan bumbu khas dan kaya akan rasa. Masakan Bali terkenal dengan penggunaan bumbu dan rempah yang kaya, serta teknik memasak yang unik. Pengaruh Hindu yang kuat di Bali juga tercermin dalam beberapa hidangannya, terutama dalam penggunaan daging babi dan penggunaan upacara keagamaan sebagai bagian dari proses memasak.',
      image: 'ayam betutu.jpg' 
    },
    4: {
      content: 'Masakan Sulawesi dikenal dengan cita rasa asam, pedas, dan segar. Masakan Sulawesi kaya akan cita rasa yang unik dan beragam, dipengaruhi oleh budaya lokal, geografis, dan pengaruh dari luar. Secara umum, masakan Sulawesi dikenal dengan penggunaan ikan dan hasil laut segar, bumbu rempah yang kuat, serta variasi rasa yang mencakup asam, pedas, gurih, dan manis. Setiap daerah di Sulawesi memiliki kekhasan masakannya sendiri.',
      image: 'kapurung.jpg' 
    },
    5: {
      content: 'Masakan Kalimantan menawarkan rasa gurih dengan pengaruh budaya Dayak. Masakan Kalimantan sangat beragam dan dipengaruhi oleh berbagai faktor, termasuk suku Dayak sebagai penduduk asli, pengaruh Melayu, Tionghoa, dan juga kondisi geografis Kalimantan yang kaya akan sumber daya alam, baik dari hutan, sungai, maupun laut. Secara umum, masakan Kalimantan dikenal dengan penggunaan bahan-bahan segar, rempah-rempah yang khas, dan teknik memasak yang sederhana namun menghasilkan cita rasa yang lezat dan unik.',
      image: 'ayam cincane.jpg' 
    },
  };
  
  function createPopup(content) {
    const popup = document.createElement('div');
    popup.id = 'dynamicPopup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = 'rgba(0, 0, 0, 0.8)'; // Latar belakang gelap transparan
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px'; // Tambahkan border radius
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'; // Bayangan yang lebih halus
    popup.style.zIndex = '1000';
    popup.style.color = 'white'; // Warna teks putih agar kontras dengan latar belakang

    const popupContentDiv = document.createElement('div'); // Div untuk konten agar styling lebih mudah
    popupContentDiv.style.backgroundColor = 'white'; // Latar belakang konten putih
    popupContentDiv.style.padding = '15px';
    popupContentDiv.style.borderRadius = '5px';
    popupContentDiv.style.color = 'black'

    popupContentDiv.innerHTML = `
        <img src="${content.image}" alt="Popup Image" style="max-width: 100%; height: auto; display: block; margin: 0 auto 10px;">
        <p style="text-align: justify;">${content.content}</p>
        <div style="text-align:center"><button id="closePopup" style="padding: 8px 16px; background-color: #3cb815; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button></div>
    `;

    popup.appendChild(popupContentDiv)
    document.body.appendChild(popup);
    return popup;
}

// Fungsi openPopup dan event listener tetap sama
function openPopup(content) {
    const popup = createPopup(content);
    popup.style.display = 'block';

    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', () => {
        popup.remove();
    });
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    const icon = box.querySelector('i');
    if (icon) {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => {
            const content = popupContents[index + 1];
            if (content) {
                openPopup(content);
            }
        });
    }
});