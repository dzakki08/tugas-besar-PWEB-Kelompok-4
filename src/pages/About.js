import React from 'react';
import './About.css'; // Tambahkan file CSS untuk gaya

const About = () => {
  return (
    <div className="about-container max-w-4xl mx-auto px-6 py-12 font-sans text-slate-700">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Tentang Kami</h1>
      <div className="space-y-6 text-justify">
        <p>
          Selamat datang di <strong className="text-blue-700">Explore Bengkulu</strong> — gerbang digital menuju kekayaan alam,
          budaya, dan sejarah Bengkulu yang memukau.
        </p>
        <p>
          Website ini dibuat dengan tujuan untuk memperkenalkan pesona tersembunyi dari tanah Bengkulu kepada masyarakat Indonesia dan dunia.
          Mulai dari pantai eksotis, hutan tropis, air terjun megah, hingga tarian dan tradisi budaya yang unik, semuanya terangkum dalam satu tempat.
        </p>
        <p>
          Kami percaya bahwa setiap sudut Bengkulu menyimpan cerita yang layak untuk dijelajahi. 
          Oleh karena itu, kami tidak hanya menyajikan daftar tempat wisata, tetapi juga kisah-kisah budaya yang hidup dalam keseharian masyarakat Bengkulu.
        </p>
        <p>
          <strong className="text-blue-700">Explore Bengkulu</strong> dikembangkan oleh tim kreatif yang memiliki semangat tinggi dalam dunia teknologi dan pelestarian budaya lokal. 
          Dengan memanfaatkan teknologi web modern seperti React JS, kami berupaya menghadirkan pengalaman eksplorasi yang interaktif, informatif, dan menyenangkan.
        </p>
        <p>
          Kami juga menyediakan integrasi peta Google Maps untuk memudahkan kamu menemukan lokasi wisata alam secara langsung, 
          serta halaman khusus yang mengulas budaya, kesenian, dan tradisi Bengkulu secara mendalam.
        </p>
        <p>
          Melalui platform ini, kami ingin mengajak kamu semua — wisatawan, pelajar, peneliti, dan siapa pun yang tertarik — 
          untuk mengenal dan mencintai Bengkulu lebih dekat.
        </p>
        <p className="font-semibold text-rose-700 text-lg">
          Mari bersama-sama eksplorasi, lestarikan, dan banggakan Bengkulu.
        </p>
        <p>
          Terima kasih telah mengunjungi situs kami. Semoga informasi yang kami sajikan bermanfaat dan menginspirasi perjalanan kamu selanjutnya!
        </p>
      </div>
    </div>
  );
};

export default About;
