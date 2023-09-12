import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode, FaServicestack,FaArrowRight,FaLaptop,FaDigitalOcean, FaCode, FaDatabase, FaRegIdBadge, FaIdeal } from 'react-icons/fa'
import {TbBulb} from'react-icons/tb';
import {CgWebsite} from 'react-icons/cg'
import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main>
      <div>
        <Wrapper>
          <section className="py-12 grid gap-10 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center">

              <div>
                <small className="text-[1rem] font-semibold text-slate-600">Digital Solutions</small>
                <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold mb-8 text-slate-800">Providing Best Digital Services for small businesses</h1>
                <p className="mb-8">We provide digital marketing, web design & development, android apps and web apps for small Businesses.</p>
                <Link className="bg-indigo-600 text-white hover:bg-indigo-500 px-5 py-3 rounded-md" href="/contact">Join DigiPakistan</Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image className="self-center" src="/illustration-1.png" width={500} height={500} alt="illustration" />
            </div>
          </section>
        </Wrapper>
      </div>
      {/* Our Services */}
      <div className="bg-slate-50">
        <Wrapper>
          <div className="py-12">
            <span className="flex items-center uppercase font-semibold gap-1 mb-3">
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
              services
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
            </span>
            <h2 className="text-4xl md:text-5xl mb-5 font-semibold">Services We Offer</h2>
            <p>We offer high notch services for better advancement<br /> of business in digital world.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 pb-12">
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600
            ">
              <FaLaptopCode  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">Web development</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600">
              <FaLaptop  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">SaaS Production</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600">
              <FaDigitalOcean  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">Digital Marketing</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600">
              <FaServicestack  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">SEO Services</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600">
              <FaCode  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">App Development</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            <div className="border rounded-md border-slate-300 p-8 relative  before:w-0 before:h-2 before:rounded-b-md before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-600">
              <FaDatabase  size={64} className="mb-5 text-indigo-500" />
              <h2 className="mb-5 text-2xl font-semibold">Data Analysis</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore perfe rendis explicabo.</p>
              <Link className="inline-flex items-center space-x-2 hover:text-indigo-600" href="/"><span>Read More</span> <FaArrowRight size={12} />  </Link>
            </div>
            
          </div>
        </Wrapper>
      </div>
      {/* About Us */}
      <div>
        <Wrapper>
          <div className="py-12 grid lg:grid-cols-2 reverse">
            <div className="order-2 lg:order-1">
            <span className="flex items-center uppercase font-semibold gap-1 mb-3">
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
              About Us
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
            </span>
            <h2 className="text-4xl md:text-5xl mb-5 font-semibold">Trusted By Worldwide Clients Since 1980.</h2>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
            <div className="grid  md:grid-cols-2 gap-10 mb-10">
             <div className="flex gap-4 ">
             <FaRegIdBadge  size={48} className="text-indigo-500" />
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
             </div>
             </div>
             {/* 2 */}
             <div className="flex gap-4 ">
             <FaRegIdBadge  size={48} className="text-indigo-500" />
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
             </div>
             </div>
             {/* 3 */}
             <div className="flex gap-4 ">
             <FaRegIdBadge  size={48} className="text-indigo-500" />
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
             </div>
             </div>
             {/* 4 */}
             <div className="flex gap-4 ">
             <FaRegIdBadge  size={48} className="text-indigo-500" />
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
             </div>
             </div>
            </div>
            <div>
              <Link href="/" className="bg-indigo-600 hover:bg-indigo-500 text-white inline-block px-8 py-4 rounded-bl-[32px] rounded-tr-[32px]">Get in Touch</Link>
            </div>
            </div>
  
            <div className="grid mb-10 lg:mb-0 order-1 lg:order-2 place-content-center place-items-center ">
              <Image  src='/illustration-2.png'  width={500} height={500} quality={75} alt="about us"/>
            </div>
            
          </div>
      
        </Wrapper>
      </div>
      {/* Choose Us */}
      <div>
        <Wrapper>
          <div className="py-12 grid lg:grid-cols-2 reverse">
            
          <div className="grid mb-10 lg:mb-0 place-content-center place-items-center ">
              <Image  src='/illustration-3.png'  width={500} height={500} quality={75} alt="about us"/>
            </div>
            
            <div className="">
            <span className="flex items-center uppercase font-semibold gap-1 mb-3">
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
             Why Choose Us
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
            </span>
            <h2 className="text-4xl md:text-5xl mb-5 font-semibold">Why Our Customers Choose Working With Us</h2>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
            <div className="grid  gap-10 mb-10">
             <div className="flex gap-4 ">
              <span className="text-indigo-600 font-bold text-4xl md:text-6xl">01.</span>
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
             </div>
             </div>
             {/* 2 */}
             <div className="flex gap-4 ">
             <span className="text-indigo-600 font-bold text-4xl md:text-6xl">02.</span>
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
             </div>
             </div>
             {/* 3 */}
             <div className="flex gap-4 ">
             <span className="text-indigo-600 font-bold text-4xl md:text-6xl">03.</span>
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
             </div>
             </div>
             {/* 4 */}
             <div className="flex gap-4 ">
             <span className="text-indigo-600 font-bold text-4xl md:text-6xl">04.</span>
             <div>
              <h3 className="text-2xl font-semibold">First in Feild</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
             </div>
             </div>
            </div>
            <div>
              <Link href="/" className="bg-indigo-600 hover:bg-indigo-500 text-white inline-block px-8 py-4 rounded-bl-[32px] rounded-tr-[32px]">Get in Touch</Link>
            </div>
            </div>
  
          </div>
      
        </Wrapper>
      </div>
      {/*   data */}
      <div className="bg-[url('/pattern-bg-3.jpg')] bg-cover bg-no-repeat py-20 bg-indigo-800 bg-blend-overlay">
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-self-center border-t-4 border py-5 rounded-b-xl bg-indigo-900/60 w-[90%] sm:w-[60%] md:w-full    border-cyan-400">
        <TbBulb size={64} color="white" className="mb-5"/>
                    <h2 className="text-4xl font-bold text-white mb-5">750+</h2>
                    <p className="text-white font-semibold">Finished Projects</p>
          </div>
          <div className="flex flex-col items-center justify-self-center border-t-4 border py-5 rounded-b-xl bg-indigo-900/60 w-[90%] sm:w-[60%] md:w-full     border-cyan-400">
        <CgWebsite size={64} color="white" className="mb-5"/>
                    <h2 className="text-4xl font-bold text-white mb-5">23+</h2>
                    <p className="text-white font-semibold">Created Jobs</p>
          </div>
          <div className="flex flex-col items-center justify-self-center border-t-4 border py-5  rounded-b-xl bg-indigo-900/60 w-[90%] sm:w-[60%] md:w-full    border-cyan-400">
        <TbBulb size={64} color="white" className="mb-5"/>
                    <h2 className="text-4xl font-bold text-white mb-5">200+</h2>
                    <p className="text-white font-semibold">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center justify-self-center border-t-4 border py-5  rounded-b-xl bg-indigo-900/60 w-[90%] sm:w-[60%] md:w-full    border-cyan-400">
        <TbBulb size={64} color="white" className="mb-5"/>
                    <h2 className="text-4xl font-bold text-white mb-5">28+</h2>
                    <p className="text-white font-semibold">Years of Experience</p>
          </div>
        </div>
        </Wrapper>
      </div>
      {/* Portfolio */}
      <div>
        <Wrapper>
          <div className="py-12"> 
          <div className="mb-5">
            <span className="flex items-center uppercase font-semibold gap-1 mb-3">
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
          PORTFOLIO
              <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
            </span>
            <h2 className="text-4xl md:text-5xl mb-5 font-semibold">Awesome Portfolio</h2>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
            <div>
              <Link href="/" className="bg-indigo-600 hover:bg-indigo-500 text-white inline-block px-8 py-4 rounded-bl-[32px] rounded-tr-[32px]">Get in Touch</Link>
            </div>
            </div>
    <Portfolio/>
          </div>
      
        </Wrapper>
      </div>
    </main>
  )
}
