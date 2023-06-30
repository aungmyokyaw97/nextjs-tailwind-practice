'use client'
import Image from "next/image"
import { useState } from "react"

export default () => {

    const [isOpen,setIsOpen] = useState(false);    
    const [isMenuOpen,setIsMenuOpen] = useState(false);


    const handleClick = () => {
        setIsOpen(!isOpen);        
        setIsMenuOpen(true);

    };

    interface nav { name : string , link : string , id : string };

    const navs : nav[] = [ 
                    {name : "About",link : "#about",id : "about"},                  
                    {name : "Features",link : "#features",id : "features"},
                    {name : "Pricing",link : "#pricing",id : "pricing"},
                    {name : "Testimonials","link" : "#testimonials",id : "testimonials"},
                    {name : "Help",link : "#help",id : "help"}
                ];

    return(
        <>
            <div className='relative z-50 bg-white'>
                <div className="flex justify-between py-8 mx-8 sm:mx-28">
                <div className='flex flex-row items-center'>
                  <Image src="logo.svg" alt='Image' width={25} height={25} />
                  <p className='pl-1 text-lg'> Lasles <b>VPN</b> </p>
                </div>
                <div className='items-center hidden px-3 md:hidden lg:flex justify-items-center'>
                  {navs.map(({name,link}) => (
                  <a href={link} className='px-4 font-light text-[#4F5665] hover:text-[#F53838]'>{name}</a>   
                  ))}

                </div>
                <div className='relative flex-row items-center hidden h-full md:hidden lg:flex'>
                  <a href="" className='px-4'>Sign In</a>
                  <a href="" className='text-[#F53838] box-border h-12 px-8 border-2 border-[#F53838] rounded-full flex items-center hover:text-white hover:bg-[#F53838]'>Sign Up</a>
                </div>

                <div className="block lg:hidden">
                   <button
                     onClick={handleClick}
                     className="flex items-center px-3 py-2 text-black-500 hover:text-black-400"
                   >
                     <svg
                       className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                     </svg>
                     <svg
                       className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                     </svg>
                   </button>
                 </div>
                 </div>
            </div>
            <div className={` absolute z-20 bg-[#dddddd] w-full ${isMenuOpen ? 'block' : 'hidden'}  ${isOpen ? 'animate-fade-in-down' : 'animate-fade-in-up'} `}>
                
                <div className="flex flex-col pb-4 mx-8">
                {navs.map(({name,link}) => (
                    <a className="pt-4" onClick={handleClick} href={link}>{name}</a>
                ))}
                </div>
                <div className="flex justify-between py-6 mx-8">
                    <a href="" className="bg-[#F53838] rounded-md text-white px-2 py-2">Sign In</a>
                    <a href="" className="bg-[#F53838] rounded-md text-white px-2 py-2">Sign Up</a>
                </div>

             </div>  
        </>
    );
}