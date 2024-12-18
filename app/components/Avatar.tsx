'use client';

import Image from "next/image";

const Avatar = () => {

    return ( 
        <Image
        rounded-full="true"
        height="30"
        width="30"
        alt="Avatar"
        src="/images/avatar.png" 
        />
     );
}
 
export default Avatar;