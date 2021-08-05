import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import axios from "axios";
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/id';

function Home() {
  process.env.TZ = 'Asia/Jakarta';
  moment.locale('id');
  const [karyawan, setKaryawan] = useState({});
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timeFormat = "HH:mm:ss";
    const now = moment();
    const time1 = moment('06:00:00', timeFormat),
      time2 = moment('15:00:00', timeFormat),
      time3 = moment('22:00:00', timeFormat);

    setDate(moment(now).format("dddd, LL"));

    axios.get('http://172.18.44.227:4100/getKaryawan')
      .then(response => setKaryawan(response.data));

    if (now.isBetween(time1, time2)) {
      setShift('Shift 1')
    } else if (now.isBetween(time2, time3)) {
      setShift('Shift 2')
    } else {
      setShift('Shift 3');
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
            <p className="description">Today&apos;s Chief Commander</p>
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
            <Image src="/logo-app.png" alt="" width={250} height={97} />
            <p className="description comcen">Command Center IT BRI</p>
            <p className="description tagline">Variability - Visibility - Velocity</p>
          </div>

          <div className="image-wrapper">
            <div className="circular-potrait">
              {
                Object.keys(karyawan).length > 0 &&
                <Image src={`/${karyawan.foto}`} alt="" className="rounded" width={426} height={543} />
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;