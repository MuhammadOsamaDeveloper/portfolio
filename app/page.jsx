import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";


export default function Home() {
  return (
  <section className="h-full"> 
     <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-10 ">
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-lg">
            Software Developer</span>
            <h1 className="h2 mb-6">Hello I'M <br /><span className="text-accent">Muhammad Osama</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegent digital experiences and I am proficient in various programming
              languages and technlogies
            </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent
                  rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
          </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
          <Photo />
        </div>
      </div>
     </div>
     <Stats />
  </section>
  );
}
