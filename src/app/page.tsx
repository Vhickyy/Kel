import Image from "next/image";
import About from "./About";
import Header from "./Header";
import Portfolio from "@/app/assests/canvaportfolio.png"
import Community from "@/app/assests/community.png"
import Women from "@/app/assests/women.png"
import Women2 from "@/app/assests/women2.png"
import SocialMedia from "@/app/assests/socialmedia.png"
import Platform from "@/app/assests/platform.png"

export default function Home() {

  const designs = [
    {
      name: "portfolio",
      img: Portfolio
    },
    {
      name: "community",
      img: Community
    },
    {
      name: "women",
      img: Women
    },
    {
      name: "social",
      img: SocialMedia
    },
    {
      name: "women2",
      img: Women2
    },
    {
      name: "platform",
      img: Platform
    },
  ]


  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-screen  lg:max-w-[2000px] mx-auto">
      <Header />
      <main className="w-full">
          
        <About />

        {/* book and class advert */}

        <section className="relative mt-[12rem] text-white w-[90%] lg:w-[85%] mx-auto">
          <p className="text-white text-center text-5xl">Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {designs.map((item,index) => (
              <div className="w-full h-auto" key={index}>
                <Image src={item.img} alt={item.name} className="w-full md:h-[20rem] object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-[12rem] text-white">
          <p className="text-white text-center text-5xl">Reviews</p>
          <div className="flex flex-col md:flex-row justify-between gap-8 w-[90%] lg:w-[85%] mx-auto mt-[5rem]">
            <div className="w-full p-4 shadow-[0_5px_15px_rgba(254,227,2,0.5)] rounded-lg">
              <video className="w-full h-auto rounded-lg shadow-lg" controls>
                <source src="/vid.mp4" type="video/mp4" />
              </video>
            </div>

            <div style={{ boxShadow: '5px 5px 11px #06040a, -5px -5px 11px #1a0e26' }} className="w-full p-4">
              <video className="w-full h-auto rounded-lg shadow-lg" controls>
                <source src="/vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="relative mt-[12rem] text-white">
          <p className="text-white text-center text-5xl">Contact Me</p>
          <p className="flex justify-between gap-4 w-[90%] lg:w-[85%] mx-auto my-[5rem]">Want to grow your buisness or want to become a canva design guru? Connect with me on: arrow to links</p>
        </section>
      </main>
      <footer className="border-t border-t-[#fee302] text-white py-6">
         <p className="text-xs text-center">Developed by Okonnah Victoria. &copy;copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
