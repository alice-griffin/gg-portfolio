'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Nav() {

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        showNav ? document.body.classList.add('lock-scroll') : document.body.classList.remove('lock-scroll');
    }, [showNav])
    
    if (typeof window !== "undefined") {
        window.addEventListener('resize', function(e) {
          if (window.innerWidth > 768) {
            setShowNav(false);
          }
        })
    }

    return (
        <div className="py-10">
            <nav className="flex justify-between items-center font-crimsonText tracking-wide">
                <Link href="/" className="font-montserrat sm:text-2xl sm:font-semibold lg:text-4xl lg:font-bold">GARY GRIFFIN</Link>
                <div className="hidden md:flex">
                    <Link href="/" className="mr-6 tracking-wide">
                        work
                    </Link>

                    <Link href="/about" className="mr-6 tracking-wide">
                        about
                    </Link>

                    <Link href="/contact" className="mr-6 tracking-wide">
                        comissions
                    </Link>
                </div>
                <div className="md:hidden">
                    {showNav ? <FontAwesomeIcon icon={faX} className="cursor-pointer" onClick={() => setShowNav(!showNav)}/> 
                    : <FontAwesomeIcon icon={faBars} className="cursor-pointer" onClick={() => setShowNav(!showNav)} />
                    }
                </div>
            </nav>
            <div id="navDiv" className={clsx(showNav ? 'md:hidden visible absolut h-screen pt-8' : 'md:hidden invisible' )}>
                <ul className={clsx(showNav ? "h-[calc(vh-5rem)] flex flex-col items-center justify-center z-10 w-screen font-crimsonText text-lg" : "hidden")}>
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
                            commissions
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;