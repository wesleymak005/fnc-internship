import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-sans flex flex col items-center justify-center min-h-screen ">
      
      <main className="flex gap-[32px] items-center">
        <div className="flex flex-col gap-[32px] max-w-[50%]">
          <div className="flex text-[50px]">
            Future
          </div>

          <div className="flex">
            Information to help kick start your journey as a software engineer
          </div>

          <div className="flex gap-[32px]">
            <button type="button" className="bg-[#D3D3D3] p-[10px] border hover:bg-[#808080] hover:rounded-[10px] rounded-[10px]">
              Start Reading
            </button>
            <button type="button" className="bg-[#D3D3D3] p-[10px] border hover:bg-[#808080] hover:rounded-[10px] rounded-[10px]">
              Browse FAQ
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          Placeholder for img
           <Image
          className="dark:invert"
          src="/sign-caution.svg"
          alt="wip"
          width={100}
          height={100}
          priority
        />
        </div>
      </main>
    </div>
  );
}
