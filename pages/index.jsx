import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/agus.png';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title shift">Shift 1</h1>
            <p className="description time">Jumat, 30 Juli 2021</p>

            <p className="description">Today's Chief Commander</p>
            <h1 className="title">Agus Dwi Ismawan</h1>
            <div className="bagian-wrapper">
              <Link href="#"><a className="bagian">APP - SDK</a></Link>
              <Link href="#"><a className="bagian outline">+62 856-4134-5581</a></Link>
            </div>
            <p className="description comcen">Command Center IT BRI</p>
            <p className="description tagline">Variability - Visibility - Velocity</p>
          </div>

          <div className="image-wrapper">
            <Image
              src={profilePic}
              alt="Picture of the CC"
            // width={426}
            // height={543}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;