"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

const links = [
    {
        name : "home",
        path: "/"
    },
    {
        name : "services",
        path: "/services"
    },
    {
        name : "resume",
        path: "/resume"
    },
    {
        name : "work",
        path: "/work"
    },
    {
        name : "contact",
        path: "/contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
return(
   <Sheet>
    <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-accent "></CiMenuFries>
    </SheetTrigger>
    <SheetContent className="flex flex-col ">
      <div className="mt-12 mb-40 text-center text-1xl">
        <Link href="/"><h1 className="text-4xl font-semibold">Osama <span className="text-accent">.</span></h1></Link>
      </div>
      <nav className="flex flex-col justify-center items-center gap-5"> {links.map((link,index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-lg capitalize hover:text-accent transition-all`} >
                 {link.name}
               </Link>
      })} </nav>


      
    </SheetContent>
   </Sheet>
)

}
export default MobileNav;