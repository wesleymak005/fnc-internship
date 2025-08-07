import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-sans flex flex col items-center justify-center min-h-screen ">
      
      <header className="flex fixed inset-x-0 top-0 border-b border-gray h-[150px] items-center justify-center gap-[150px] text-[30px]">
        
        <button type="button" className="hover:bg-[#808080] p-[50px] hover:rounded-[5px]">
          Home
        </button>
        <button type="button" className="hover:bg-[#808080] p-[50px] hover:rounded-[5px]">
          Topics
        </button>
        <button type="button" className="hover:bg-[#808080] p-[50px] hover:rounded-[5px]">
          About Us
        </button>
        
      </header>
      
      <main className="flex gap-[32px] items-center">
        <div className="flex flex-col gap-[32px] max-w-[50%]">
          <div className="flex text-[50px]">
            Guide to Software Engineering
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
      <footer className="flex fixed inset-x-0 bottom-0 border-t border-gray h-[75px] items-center justify-center">
        About This Page (MISC)
        <Image
          className="dark:invert absolute right-10"
          src="/message-text-outline.svg"
          alt="message icon"
          width={40}
          height={40}
          priority
        />
      </footer>
    </div>
  );
}
