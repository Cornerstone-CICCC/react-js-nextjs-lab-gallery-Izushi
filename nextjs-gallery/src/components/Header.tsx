import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-10">
      <div className="text-2xl font-bold">Gallery App</div>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
    </header>
  )
}

export default Header