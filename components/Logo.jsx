import Link from "next/link";
import logo from "../public/lessee.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href= '/'>
        <Image
        src = {logo}
        width={200}
        height={100}
        alt="Logo"
        
        />
    </Link>
  )
}

export default Logo
