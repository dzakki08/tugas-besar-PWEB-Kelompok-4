import React from 'react';
import './Wisata.css';

const wisataList = [
  {
    name: "Pantai Panjang",
    description: "Pantai dengan garis pantai sepanjang 7 km, cocok untuk menikmati matahari terbenam.",
    image: "/images/Pantai Panjang.jpg",
    mapLink: "https://maps.app.goo.gl/DW16sEABpsZneJwHA",
  },
  {
    name: "Benteng Marlborough",
    description: "Benteng peninggalan Inggris abad ke-18 yang menjadi ikon sejarah Bengkulu.",
    image: "/images/benteng marlborough.jpg",
    mapLink: "https://maps.app.goo.gl/jNP6idTrWNzdvVKDAr5",
  },
  {
    name: "Danau Dendam Tak Sudah",
    description: "Danau alami dengan legenda mistis, dikelilingi perbukitan hijau dan suasana tenang.",
    image: "/images/Danau Dendam.jpg",
    mapLink: "https://maps.app.goo.gl/PFb1CtqAbMRtn9N2A",
  },
  {
    name: "Sungai Suci",
    description: "Pantai dengan jembatan gantung ikonik dan pemandangan karang laut yang eksotis.",
    image: "/images/sungaisuci.jpeg",
    mapLink: "https://maps.app.goo.gl/mhcupWtTaMXisWB6A",
  },
  {
    name: "Pantai Nangai",
    description: "Pantai tersembunyi dengan hamparan pasir putih dan ombak yang tenang.",
    image: "/images/pantainangai.jpeg",
    mapLink: "https://maps.app.goo.gl/LPtoTiXb8tfzPjRv6",
  },
  {
    name: "Pantai Pasar Bawah",
    description: "Pantai yang terletak dekat pusat kota, ramai dikunjungi untuk bersantai dan menikmati sunset.",
    image: "/images/pasarbawah.jpeg",
    mapLink: "https://maps.app.goo.gl/Fe8XKsWNscRPjv6B8",
  },
  {
    name: "Batu Kambing",
    description: "Objek wisata alam berupa formasi batu besar yang menyerupai kambing di pinggir pantai.",
    image: "/images/batukambing.jpeg",
    mapLink: "https://maps.app.goo.gl/VkxTUwFVH9xHhD1N6",
  },
  {
    name: "Bukit Kandis",
    description: "Bukit karang bekas tambang dengan jalur hiking ekstrem dan pemandangan luar biasa.",
    image: "/images/bukitkandis.jpeg",
    mapLink: "https://maps.app.goo.gl/ndDJz83yHFKpZU3VA",
  },
  {
    name: "Bukit Kaba",
    description: "Gunung berapi aktif dengan dua kawah dan pemandangan alam yang memesona.",
    image: "/images/kaba.jpeg",
    mapLink: "https://maps.app.goo.gl/wnyPiVqjTy9SoL6a8",
  },
  {
    name: "Napal Jungur",
    description: "Wisata alam goa dan sungai bawah tanah di Kabupaten Seluma, cocok untuk petualangan.",
    image: "/images/napaljungur.jpeg",
    mapLink: "https://maps.app.goo.gl/WVY1cAB53eWvnnCy8",
  },
  {
    name: "Danau Mas Harun Bastari",
    description: "Danau alami yang indah dengan pemandangan perbukitan, cocok untuk piknik dan foto-foto.",
    image: "/images/danaumas.jpeg",
    mapLink: "https://maps.app.goo.gl/f4pEStNzdvBgPEEV9",
  },
  {
    name: "Air Terjun Curug 9",
    description: "Air terjun bertingkat dengan suasana alami yang masih asri dan menantang untuk trekking.",
    image: "/images/curug9.jpeg",
    mapLink: "https://maps.app.goo.gl/TNY4bNT1r23dHKpeA",
  },
  {
    name: "Taman Wisata Alam Seblat",
    description: "Habitat gajah Sumatera dan ekowisata di hutan tropis Bengkulu Utara.",
    image: "/images/seblat.jpeg",
    mapLink: "https://maps.app.goo.gl/aBvdzYuCULxLqKX67",
  },
  {
    name: "Pantai Linau",
    description: "Pantai eksotis dengan pasir putih dan ombak tenang, cocok untuk liburan keluarga.",
    image: "/images/pantai-linau-kaur.webp",
    mapLink: "https://maps.app.goo.gl/jFEBoPnE2FVyAzDo9",
  },
  {
    name: "Pantai Jakat",
    description: "Pantai di pusat kota Bengkulu dengan banyak kuliner lokal dan spot bersantai sore hari.",
    image: "/images/jakat.jpeg",
    mapLink: "https://maps.app.goo.gl/6t6W6S5rH9UYSnSN6",
  },
  {
    name: "Rumah Pengasingan Soekarno",
    description: "Tempat bersejarah di mana Soekarno diasingkan oleh Belanda selama di Bengkulu.",
    image: "/images/rumahbungkarno.jpeg",
    mapLink: "https://maps.app.goo.gl/UBFJmPSM2ipbgCar5",
  },
  {
    name: "Air Terjun Kepala Curup",
    description: "Air terjun tinggi dengan debit air besar, jadi destinasi populer di Rejang Lebong.",
    image: "/images/kepalacurup.jpeg",
    mapLink: "https://maps.app.goo.gl/V52SU8npyUS9NFxS9",
  },
  {
    name: "Pantai Padang Betuah",
    description: "Pantai eksotis yang terhubung langsung dengan Danau Gedang, menyajikan pemandangan unik laut dan danau berdampingan.",
    image: "/images/betuah.jpeg",
    mapLink: "https://maps.app.goo.gl/KPgRWWp5iwGCx9RY9",
  }
  
  
];


function Wisata() {
  return (
    <div className="wisata-container p-4 max-w-5xl mx-auto">
      <h2 className="wisata-title text-3xl font-bold text-center text-blue-700 mb-6">Wisata Bengkulu</h2>
      <div className="wisata-grid grid md:grid-cols-2 gap-6">
        {wisataList.map((item, index) => (
          <div key={index} className="wisata-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
            <div className="wisata-card-content p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                Lihat di Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wisata;
