import Image from 'next/image'
import React from 'react'
import Kel from "@/app/assests/aboutImg3.png"


const Header = () => {
  return (
    <header className="relative">
        <div className="absolute right-0 blur-3xl w-[15rem] h-[17rem] md:w-[30rem] md:h-[30rem] bg-[#fee30250] z-[-10] "></div>
        <div className="absolute left-0 bottom-0 blur-3xl w-[15rem] md:w-[30rem] h-[15rem] md:h-[12rem] bg-gradient-to-br from-[#fee30240] via-[#fee30280] to-[#fee30250] z-[-10] opacity-40"></div>

        <nav className="w-[90%] lg:w-[85%] mx-auto text-white flex justify-between items-center py-4">
          <p>Lofo</p>
          <div>
            <ul className="flex gap-4">
              <li>hone</li>
              <li>hone</li>
              <li>hone</li>
            </ul>
          </div>
        </nav>

        <section className="relative mt-[2rem] md:mt-[4rem] w-full">
          <div className=" absolute right-0 w-[1.8rem] flex flex-col justify-around h-[28rem]">
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-[90%] lg:w-[85%] mx-auto">
            <aside className="text-white w-full md:w-[50%] ">
              <div className="">
                <h2 className="font-medium text-3xl md:text-4xl xl:text-5xl mt-[4rem] md:mt-0">Exceptional Designs</h2>
                <div className="w-[8rem] bg-[#fee302] h-2 rounded-2xl"></div>
              </div>
              <p className="text-[#fee302] text-3xl italic py-4">Canva Made Easy Man.</p>
              <p className="text-base tracking-wide leading-loose my-[2rem] md:my-[3rem]">I create designs that are timeless, Let's take creativity to the next level.I create designs that are timeless, Let's take creativity to the next level.I create designs that are timeless, Let's take creativity to the next level.</p>
              <button className="cursor-pointer bg-gradient-to-r from-[#fee302] via-[#fee30260] to-[#fee30230] px-[4rem] py-4 rounded-lg border-none ">Let's Work</button>
            </aside>

            <aside className="relative">
              <div className="border-[1.5rem] border-[#fee302] w-[15rem] lg:w-[20rem] xl:w-[24rem] h-[20rem]  md:h-[28rem] xl:h-[32rem] rounded-full overflow-clip shadow-[0_5px_15px_rgba(254,227,2,0.5)]">
                <Image src={Kel} alt="Kelechi-Austin-Okorie" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#fee302] blur-md rounded-l-full absolute bottom-0 w-full z-[-10] h-6">
              </div>
                <p className="text-black italic text-center pt-8 z-50">Kelechi Austin Okorie</p>
            </aside>
          </div>
        </section>
      </header>
  )
}

export default Header