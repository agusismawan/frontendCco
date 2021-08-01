import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import axios from "axios";
import { useState, useEffect } from 'react'
import moment from 'moment';

function Home() {
  process.env.TZ = 'Asia/Jakarta';
  const tglIndo = require('moment/locale/id');
  moment.locale('id', tglIndo);
  const [karyawan, setKaryawan] = useState({});
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const jam = parseInt(moment().format('HH'));
    setDate(moment().format("dddd, LL"));

    axios.get('http://localhost:4100/getKaryawan')
      .then(response => setKaryawan(response.data));

    if (jam > 6 && jam < 15) {
      setShift('Shift 1')
    } else if (jam > 15 && jam < 23) {
      setShift('Shift 2')
    } else {
      setShift('Shift 3')
    }
  }, [])

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title shift">{shift}</h1>
            <p className="description time">{date}</p>
            <p className="description">Today's Chief Commander</p>
            {
              Object.keys(karyawan).length > 0 ?
                <>
                  <h1 className="title">{karyawan.nama}</h1>
                  <div className="bagian-wrapper">
                    <Link href="#"><a className="bagian">APP - {karyawan.fungsi}</a></Link>
                    <Link href="#"><a className="bagian outline">{karyawan.nomor_hp}</a></Link>
                  </div>
                </> : []
            }
            <Image
              src="/logo-app.png"
              alt="Picture of the CC"
              width={300}
              height={116}
            />
            <p className="description comcen">Command Center IT BRI</p>
            <p className="description tagline">Variability - Visibility - Velocity</p>
          </div>

          <div className="image-wrapper">
            {
              Object.keys(karyawan).length > 0 &&
              <Image
                src={`/${karyawan.foto}`}
                alt="Picture of the CC"
                width={426}
                height={543}
              />
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;