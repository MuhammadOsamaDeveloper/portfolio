import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = ()=> {
    return(
     <header className="py-4 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between item-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Osama<span className="text-accent">.</span>
            </h1>
            </Link>

          <div className="hidden lg:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
          </div>
            <div className="lg:hidden">
                <MobileNav />
            </div>


        </div>
     </header>
    )
}

export default Header;