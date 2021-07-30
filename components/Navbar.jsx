import Link from 'next/link';
import logoPic from '../public/logo-bri.png';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                {/* <Link href="/"><a className="logo">BRI</a></Link> */}
                <Link href="/">
                    <a className="logo">
                        <Image
                            src={logoPic}
                            alt="Logo BRI"
                            width={65}
                            height={25}
                        />
                    </a>
                </Link>

                <ul className="nav-links">
                    <li><Link href="/"><a className="nav-item active">Home</a></Link></li>
                    <li><Link href="/schedule"><a className="nav-item">Schedule</a></Link></li>
                    <li><Link href="/login"><a className="nav-item">Login</a></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;