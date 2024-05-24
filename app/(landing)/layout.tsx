import Navbar from "./_components/Navbar"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#101010]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  )
}

export default LandingLayout
