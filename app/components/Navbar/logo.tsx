'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
        src="/images/logo.png" 
        alt="Logo" 
        loading="lazy" 
        width="150"
        height="50"
        className="hidden md:block cursor-pointer">
    </Image> 
    )
}
export default Logo;