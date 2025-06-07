import Link from "next/link";
import logo from "../public/lessee.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href= '/'>
        <Image
        src = {logo}
        width={160}
        height={30}
        alt="Logo"
        
        />
    </Link>
  )
}

export default Logo
