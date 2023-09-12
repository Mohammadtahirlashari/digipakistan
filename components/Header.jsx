'use client';
import Link from 'next/link';
import { useState } from 'react';
import Wrapper from './Wrapper';
import { usePathname} from 'next/navigation';
const Header = () => {
    const menu=[
        {
            id:1,
            item:'Home',
            href:'/',
        },
        {
            id:2,
            item:'Blog',
            href:'/blog',
        },
        {
            id:3,
            item:'Services',
            href:'/services',
        },
        {
            id:4,
            item:'Portfolio',
            href:'/portfolio',
        },
        {
            id:5,
            item:'Contact',
            href:'/contact',
        }
    ]
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
        

    };
    return (
        <header className='sticky top-0 bg-white shadow z-50'>
            <Wrapper>
                <div className='flex justify-between items-center py-5'>
                    <p>Digi<span className='text-indigo-600'>Pakistan</span></p>
                    <nav className={`mobile-nav ${isOpen ? "-left-0": "-left-[800px]"} lg:lg-nav`}>
                        {
                            menu.map(item=>{
                                return (
                                <Link onClick={()=>setIsOpen(false)}  tabIndex={item.id} className={`lg:lg-link mobile-link ${path === item.href ?"bg-slate-100":"bg-transparent"}`} key={item.id} href={item.href}>{item.item}</Link>
                                )
                            })
                        }                        
                    </nav>
                    <Link className='bg-indigo-600 hover:text-white text-white rounded-md px-4 py-1 hover:bg-indigo-500 hidden lg:inline-block' href="tel:+9203015674375">Call Now</Link>
                    <button onClick={handleClick}
                        className="flex flex-col justify-center items-center lg:hidden">
                        <span className={`bg-slate-600 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                                'rotate-45 translate-y-1' : '-translate-y-0.5'
                            }`} >
                        </span>
                        <span className={`bg-slate-600 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                                'opacity-0' : 'opacity-100'
                            }`} >
                        </span>
                        <span className={`bg-slate-600 block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm ${isOpen ?
                                '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                            }`} >
                        </span>

                    </button>
                </div>
            </Wrapper>
        </header >
    )
}

export default Header