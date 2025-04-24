import React from 'react';
import './Budaya.css';

const budayaList = [
  {
    title: "Festival Tabot",
    description: "Upacara tradisional yang dilakukan setiap 1–10 Muharram untuk mengenang cucu Nabi Muhammad, Hasan dan Husein.",
    image: "/images/tabot.jpg",
    link: "https://id.wikipedia.org/wiki/Tabot",
  },
  {
    title: "Kain Besurek",
    description: "Kain khas Bengkulu yang bermotif kaligrafi Arab dengan teknik batik.",
    image: "/images/kainbesurek.jpg",
    link: "https://id.wikipedia.org/wiki/Kain_Besurek",
  },
  {
    title: "Tari Andun",
    description: "Tari tradisional Bengkulu yang dilakukan secara massal dalam acara pernikahan atau adat.",
    image: "/images/tariandun.jpg",
    link: "https://id.wikipedia.org/wiki/Tari_Andun",
  },
  {
    title: "Musik Dhol",
    description: "Musik pukulan khas Bengkulu yang dimainkan menggunakan alat musik Dhol dalam acara Tabot dan budaya lainnya.",
    image: "/images/dhol.jpg",
    link: "https://id.wikipedia.org/wiki/Dhol",
  },
  {
    title: "Rumah Adat Bengkulu",
    description: "Rumah tradisional Bengkulu yang disebut 'Rumah Bubungan Lima' dengan arsitektur khas dan nilai filosofi tinggi.",
    image: "/images/bubunganlima.jpg",
    link: "https://id.wikipedia.org/wiki/Rumah_Bubungan_Lima",
  },
  {
    title: "Tari Bidadari Teminang Anak",
    description: "Tarian tradisional yang berasal dari Bengkulu Selatan, biasanya ditampilkan dalam penyambutan tamu kehormatan dan upacara adat.",
    image: "/images/bidadariteminanganak.jpg",
    link: "https://www.instagram.com/p/CmWaOGvvTP7/", 
  }
];



function Budaya() {
  return (
    <div className="budaya-container p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-rose-700">Budaya Bengkulu</h2>
      <div className="budaya-grid grid md:grid-cols-2 gap-6">
        {budayaList.map((item, index) => (
          <div
            key={index}
            className="budaya-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
            <div className="budaya-card-content p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="baca-selengkapnya">
            Baca Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Budaya;
