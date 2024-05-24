import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.svg" alt="Peachify logo" width={32} height={32} />
      <p className={cn("font-semibold", font.className)}>Peachify</p>
    </div>
  )
}

export default Logo
