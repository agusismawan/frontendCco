import Link from 'next/link';
import Image from 'next/image';
import { withRouter } from 'next/router';

function Navbar({ router }) {
    const navs = [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'Schedule', href: 'https://docs.google.com/spreadsheets/d/1UjW1DNYovuPxvmq0KhuW1ISTME1uMEzGRqcsUPNFjRw/edit#gid=276565603' },
        { id: 3, text: 'About', href: '/about' }
    ];

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
                    {navs.map(nav => (
                        <li key={nav.id}><Link href={nav.href} passHref><a target={nav.id == 2 ? '_blank' : ''} className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);