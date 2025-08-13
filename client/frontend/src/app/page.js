import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className="font-sans flex flex col items-center justify-center min-h-screen ">
      
      <main className="flex gap-[10px] items-center justify-between w-full px-50">
        <div className="flex flex-col gap-[32px] max-w-[50%]">
          <div className="flex text-[50px]">
            Guide to Software Engineering
          </div>

          <div className="flex">
            Information to help kick start your journey as a software engineer
          </div>

          <div className="flex gap-[32px]">
            <Link className="bg-[#D3D3D3] p-[10px] border hover:bg-gray-100 hover:rounded-[10px] rounded-[10px]" href="/topics/hub">Start Reading</Link>
            <Link className="bg-[#D3D3D3] p-[10px] border hover:bg-gray-100 hover:rounded-[10px] rounded-[10px]" href="/faq">Browse FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col">
           <Image
          className="dark:invert"
          src="/se.png"
          alt="wip"
          width={500}
          height={500}
          priority
        />
        </div>
      </main>
    </div>
  );
}
