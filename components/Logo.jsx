import Link from "next/link";
import logo from "../public/03.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href= '/'>
        <Image
        src = {logo}
        width={120}
        height={20}
        alt="Logo"
        style={{ filter: "invert(1)" }} 
        />
    </Link>
  )
}

export default Logo
