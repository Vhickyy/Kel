"use client"
import React, { useState } from 'react'
import KelOffice from "@/app/assests/kel-office.jpg"
import Image from 'next/image'


const About = () => {
    const [hover,setHover] = useState<number | null>(null);

    const updateHover = (index:number) => {
        setHover(index);
    }

    const removeHover = () => {
        setHover(null)
    }
  return (
    <section className="relative mt-[5rem] md:mt-[12rem]">
          <div className="hidden  absolute left-0 w-[1.8rem] md:flex flex-col justify-between h-[15rem] top-1">
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
            <div className="bg-[#fee302] h-5 w-full"></div>
          </div>
          <div className="absolute flex w-[20%] md:w-[15rem] justify-between left-0 top-1">
            <div className="bg-[#fee302] h-5  w-[1rem] md:w-[1.8rem]"></div>
            <div className="bg-[#fee302] h-5  w-[1rem] md:w-[1.8rem]"></div>
            <div className="bg-[#fee302] h-5  w-[1rem] md:w-[1.8rem]"></div>
            <div className="bg-[#fee302] h-5  w-[1rem] md:w-[1.8rem]"></div>
            <div className="bg-[#fee302] h-5  w-[1rem] md:w-[1.8rem]"></div>
          </div>
          <p className="text-white text-center text-3xl md:text-5xl">About Me</p>
          <aside className="w-[90%] lg:w-[85%]  mx-auto mt-[3rem] md:mt-[5rem]">

            <div className="flex flex-col lg:flex-row gap-10 h-auto">
              <div className="lg:w-[55%] h-auto">
                <Image src={KelOffice} alt="kel-office" className="w-full block  object-cover rounded-lg h-full" />
              </div>
              <div className="text-white lg:w-[40%] leading-loose tracking-wide grid gap-6">
                <p >
                I am a Business Management graduate, a Business Assistant and a <span className="text-[#fee302] font-bold ">Canva Expert</span> with more than 3years experience. I am also a Canvassador I take my client's work very seriously and always deliver on time.
                </p>
                <p>I create attractive and scroll-stopping designs for business owners that help them grab the attention of their target/potential customers.
                I also tutor people on how to make better use of Canva on Youtube and personal classes. I have trained over a thousand people.</p>
                <button className="cursor-pointer bg-gradient-to-r from-[#fee302] via-[#fee30260] to-[#fee30230] px-[4rem] py-4 rounded-lg border-none mt-[2rem] w-fit">Download Resume</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-8 text-white mt-[3rem] md:mt-[6rem]">
              {[1,2,3].map((item,index) => (
                <div 
                    key={index}
                    // style={{ boxShadow: '5px 5px 11px #06040a, -5px -5px 11px #1a0e26' }}
                    onMouseOver={() => setHover(index)} 
                    onMouseLeave={removeHover} 
                    className={`p-6 rounded-lg w-full transition-all duration-300 shadow-[0_5px_15px_rgba(254,227,2,0.5)] ${hover == index && 'bg-gradient-to-bl from-[#fee302] via-[#fee30260] to-[#fee30230] shadow-[#fee302] '}`}>
                <p>Skills</p>
                <div className="flex flex-col justify-between gap-2 text-white mt-[1rem]">
                {["Templates","Social Media Covers","Publication Designs","E-book Covers","Brand Identity Designs","Flyers & Posters","Social Media Posts","Business Cards","Video Editing","Youtube Thumbnails"].map(item => (
                  <div key={item} className="flex gap-4 items-center">
                    <div className="h-1 w-1 bg-[#fee302]"></div>
                    <p>{item}</p>
                  </div>))}
               </div>
              </div>))}

            </div>
          </aside>
        </section>
  )
}

export default About