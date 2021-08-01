import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <a className="logo">
                        <Image
                            src="/logo-bri.png"
                            alt="Logo BRI"
                            width={65}
                            height={25}
                        />
                    </a>
                </Link>

                <ul className="nav-links">
                    <li><Link href="/"><a className="nav-item active">Home</a></Link></li>
                    <li><Link href="https://docs.google.com/spreadsheets/d/1UjW1DNYovuPxvmq0KhuW1ISTME1uMEzGRqcsUPNFjRw/edit#gid=276565603" passHref><a target="_blank" className="nav-item">Schedule</a></Link></li>
                    <li><Link href="/about"><a className="nav-item">About</a></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;