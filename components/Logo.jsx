import Link from "next/link";
import logo from "../public/lessee.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href= '/'>
        <Image
        src = {logo}
        width={120}
        height={20}
        alt="Logo"
        
        />
    </Link>
  )
}

export default Logo
