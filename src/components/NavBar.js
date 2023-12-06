'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Nav() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <nav className="py-20 flex justify-between items-center">
                <Link href="/">GARY GRIFFIN</Link>
                <div className="hidden md:flex">
                    <Link href="/" className="mr-5">
                        work
                    </Link>

                    <Link href="/about" className="mr-5">
                        about
                    </Link>

                    <Link href="/contact" className="mr-5">
                        contact
                    </Link>
                </div>
                <div className="md:hidden">
                    {showNav ? <FontAwesomeIcon icon={faX} className="text-md" onClick={() => setShowNav(!showNav)}/> 
                    : <FontAwesomeIcon icon={faBars} onClick={() => setShowNav(!showNav)} />
                    }
                </div>
            </nav>
            <div className={clsx(showNav ? 'md:hidden visible absolute h-[calc(100vh-200px)] flex flex-col items-center justify-center' : 'md:hidden invisible' )}>
                <ul className={clsx(showNav ? "h-[calc(100vh-200px)] flex flex-col items-center justify-center bg-white z-10 w-screen" : "hidden")}>
                    <li>
                        <Link href="/about" onClick={() => setShowNav(!showNav)}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={() => setShowNav(!showNav)}>
                            work
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setShowNav(!showNav)}>
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;