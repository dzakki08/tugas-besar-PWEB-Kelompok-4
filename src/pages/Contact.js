import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
<div className="contact-container">
  <h1 className="contact-title">Kontak Kami</h1>
  <p className="contact-description">
    Kami sangat senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran, atau ingin 
    berkolaborasi untuk mempromosikan pariwisata dan budaya Bengkulu, silakan hubungi kami melalui informasi berikut:
  </p>

  <div className="card-row">
    <div className="card">
    <h2 >Hubungi Kami Melalui</h2>
      <p><strong>Email:</strong> <a href="mailto:explorebengkulu@email.com">explorebengkulu@email.com</a></p>
      <p><strong>Telepon:</strong> <a href="tel:+6281234567890">+62 812-3456-7890</a></p>
      <p><strong>Alamat:</strong> Jl. Pariwisata No. 10, Kota Bengkulu, Indonesia</p>
    </div>

    <div className="card">
      <h2 >Ikuti Kami di Media Sosial</h2>
      <ul>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/explorebengkulu" target="_blank" rel="noopener noreferrer">@explorebengkulu</a></li>
        <li><strong>Facebook:</strong> <a href="https://facebook.com/explorebengkulu" target="_blank" rel="noopener noreferrer">Explore Bengkulu Official</a></li>
        <li><strong>Twitter/X:</strong> <a href="https://twitter.com/explore_bkl" target="_blank" rel="noopener noreferrer">@explore_bkl</a></li>
        <li><strong>YouTube:</strong> <a href="https://youtube.com/@explorebengkulu" target="_blank" rel="noopener noreferrer">Explore Bengkulu Channel</a></li>
      </ul>
    </div>
  </div>

  <p className="contact-note">
    Atau isi formulir kontak di halaman kami untuk respon yang lebih cepat. Terima
kasih atas perhatian Anda!
  </p>
</div>

);
};
export default Contact;
