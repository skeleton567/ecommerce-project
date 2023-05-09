
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
  };

const Header: React.FC<Props> = ({ children }) => {
    return (
        <div className="mx-[20%]">
        <div className="flex justify-between mt-10">
            <Link href={'/'} className="flex gap-3">
                <Image src="/static/logo.svg" alt="logo"  width="40" height="40" />
                <h1 className="font-bold text-2xl">FishCastle</h1>
            </Link>
             <div className="flex gap-3">
                <Image src="/static/aquarium.svg" alt="logo"  width="40" height="40" />
                <p className="text-violet-600">$0.00</p>
            </div>    
        </div>
        {children}
        <nav className="flex bg-violet-800 text-white mt-10 w-full h-20 items-center justify-center rounded-md gap-4">
          <Link href={'/'} className="flex gap-3">Home</Link>
        {/* {!localStorage.getItem('token') && <Link href={'/login'} className="flex gap-3">Login</Link>}
        {!localStorage.getItem('token') && <Link href={'/register'} className="flex gap-3">Register</Link>}
        {!localStorage.getItem('token') && <Link href={'/login'} className="flex gap-3">Login</Link>}
        {localStorage.getItem('token') && <Link href={'/add-product'} className="flex gap-3">Register</Link>} */}
        </nav>
        </div>
    );
}  

export default Header