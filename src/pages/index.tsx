import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-[1.5rem] font-bold">Main landing page</p>
      <Link href='/about'>
        
          <p>Go to about page</p>
        
      </Link>
      <Link href='/profile'>
        
          <p>Go to about profile</p>
        
      </Link>
    </div>
  )
}
