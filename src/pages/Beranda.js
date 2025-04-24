import React from 'react';
import './Beranda.css';

function Beranda() {
  return (
    <div className="beranda-container">
      <h2 className="welcome-title">Selamat Datang di <span>Explore Bengkulu</span></h2>
      <p className="intro">
        Bengkulu menyimpan banyak pesona alam dan kekayaan budaya yang menakjubkan. Website ini akan membantumu
        menjelajahi destinasi wisata serta mengenal budaya khas Bengkulu secara lebih dekat dan menarik.
      </p>

      <section className="section">
        <h3 className="section-title">Rekomendasi Wisata Populer</h3>
        <div className="scroll-cards">
          <div className="card">
            <img src="/images/Pantai Panjang.jpg" alt="Pantai Panjang" />
            <div className="card-content">
              <h4>Pantai Panjang</h4>
              <p>Pantai indah dengan garis pantai sepanjang 7 km, sempurna untuk menikmati sunset dan jogging santai.</p>
              <a href="https://maps.app.goo.gl/DW16sEABpsZneJwHA" target="_blank">Lihat di Google Maps</a>
            </div>
          </div>

          <div className="card">
            <img src="/Images/benteng marlborough.jpg" alt="Benteng Marlborough" />
            <div className="card-content">
              <h4>Benteng Marlborough</h4>
              <p>Bangunan peninggalan Inggris abad ke-18, menjadi saksi bisu sejarah kolonial di Bengkulu.</p>
              <a href="https://maps.app.goo.gl/jNP6idTrWNzdvVKDAr5" target="_blank">Lihat di Google Maps</a>
            </div>
          </div>

          <div className="card">
            <img src="/Images/Danau Dendam.jpg" alt="Danau Dendam Tak Sudah" />
            <div className="card-content">
              <h4>Danau Dendam Tak Sudah</h4>
              <p>Danau Dendam Tak Sudah adalah danau alami yang terletak di Kota Bengkulu, dikelilingi oleh perbukitan hijau dan hutan tropis.Sempurna untuk menikmati sunrise </p>
              <a href="https://maps.app.goo.gl/PFb1CtqAbMRtn9N2A" target="_blank">Lihat di Google Maps</a>
            </div>
          </div>

          <div className="card">
            <img src="/Images/Kaba.jpeg" alt="Bukit Kaba" />
            <div className="card-content">
              <h4>Bukit Kaba</h4>
              <p>Gunung berapi aktif dengan dua kawah dan pemandangan alam yang memesona.</p>
              <a href="https://maps.app.goo.gl/wnyPiVqjTy9SoL6a8" target="_blank">Lihat di Google Maps</a>
            </div>
          </div>
        </div>
          
      </section>

      <section className="section">
  <h3 className="section-title">Budaya Bengkulu Sekilas</h3>
  <div className="scroll-cards">
    <div className="card">
      <img src="/images/kainbesurek.jpg" alt="Kain Besurek" />
      <div className="card-content">
        <h4>Kain Besurek</h4>
        <p>Kain tradisional khas Bengkulu dengan motif kaligrafi Arab, penuh filosofi dan sejarah budaya.</p>
        <a href="https://id.wikipedia.org/wiki/Kain_Besurek" target="_blank">Baca Selengkapnya</a>
      </div>
    </div>

    <div className="card">
      <img src="/images/tabot.jpg" alt="Festival Tabot" />
      <div className="card-content">
        <h4>Festival Tabot</h4>
        <p>Festival tahunan penuh warna dan tradisi, memperingati kisah sejarah Islam di Bengkulu.</p>
        <a href="https://id.wikipedia.org/wiki/Tabot" target="_blank">Baca Selengkapnya</a>
      </div>
    </div>
    <div className="card">
      <img src="/images/dhol.jpg" alt="Musik Dol" />
      <div className="card-content">
        <h4>Musik Dhol</h4>
        <p>Musik pukulan khas Bengkulu yang dimainkan menggunakan alat musik Dhol dalam acara Tabot dan budaya lainnya.</p>
        <a href="https://id.wikipedia.org/wiki/Dol" target="_blank">Baca Selengkapnya</a>
      </div>
    </div>
    <div className="card">
      <img src="/images/tariandun.jpg" alt="Tari Andun" />
      <div className="card-content">
        <h4>Tari Andun</h4>
        <p>Tari tradisional Bengkulu yang dilakukan secara massal dalam acara pernikahan atau adat.</p>
        <a href="https://id.wikipedia.org/wiki/Tari_Andun" target="_blank">Baca Selengkapnya</a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Beranda;
