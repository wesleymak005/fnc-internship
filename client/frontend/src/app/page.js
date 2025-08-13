/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className="flex flex col items-center justify-center min-h-screen ">
      
      <main className="flex gap-[10px] items-center justify-between w-full px-50">
        <div className="flex flex-col gap-[32px] max-w-[50%]">
          <div className="font-mono flex text-[50px] font-bold">
            Guide to Software Engineering
          </div>

          <div className="flex text-[20px]">
            Information to help kick start your journey as a software engineer. We are a group of students currently majoring in the field, and we'd like you to take you on the same journey we're on. We're here to help you learn the right skills, provide information on the current AI situation, and teach you how to stay healthy. Just click start reading to start your journey! 
          </div>

          <div>Created by students, for students — this guide bridges the gap between 
            classroom learning and real-world software engineering skills.</div>

          <div className="flex gap-[32px]">
            <Link className="bg-[#F97316] p-[15px] border hover:bg-[#EA580C] hover:rounded-[10px] rounded-[10px] font-bold" href="/topics/hub">Start Reading</Link>
            <Link className="bg-[#E5E7EB] p-[15px] border hover:bg-[#D1D5DB] hover:rounded-[10px] rounded-[10px] font-bold" href="/faq">Browse FAQ</Link>
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
