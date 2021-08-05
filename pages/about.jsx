import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Chief&apos;s Responsibility</h1>
            <div className="about-wrapper">
              <ol>
                <div className="about-item">
                  <li>Melakukan inspeksi secara berkala ke ruang command center secara berkala per 30 menit atau melalui CCTV jika kondisi tidak memungkinkan, meliputi ;
                    <ul>
                      <li>Mengecek all screen command center → Memastikan all screen refresh (tidak blank atau error)</li>
                      <li>Mengecek penerapan protokol kesehatan di dalam ruang command center</li>
                      <li>Melakukan quick scan wajah-wajah tim yang sedang on site di comcen dan aktivitas pekerjaan yang dilakukan tim onsite (depan, belakang, tengah)</li>
                    </ul>
                  </li>
                </div>
                <div className="about-item">
                  <li>Mengetahui secara uptodate isu operasional aplikasi, infra, sec yang terjadi di command center</li>
                </div>
                <div className="about-item">
                  <li>Memastikan call tree protocol dan teams-on-teams dijalankan oleh tim onduty</li>
                </div>
                <div className="about-item">
                  <li>Berkoordinasi dengan pihak security dan pihak terkait jika ada indikasi pelanggaran security yang terjadi</li>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;