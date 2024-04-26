'use client';
import styles from '@/assets/styles/Navbar.module.scss';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const handleResumeClick = () => {
    window.open('/resumeLink', '_blank');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href='/'>
          <h1>RZ</h1>
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
        <button onClick={handleResumeClick} className={styles.resumeButton}>
          Resume
        </button>
      </div>
    </nav>
  );
}
