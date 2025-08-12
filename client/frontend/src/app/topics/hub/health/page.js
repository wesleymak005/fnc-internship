import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="font-sans flex justify-center min-h-screen ">
      
      <main className="flex gap-[32px] mt-[10%] justify-center">
        <div className="flex flex-col gap-[32px] items-center">
          <div className="flex text-[45px] items-center">
            Learn more about your health as a Software Engineer.  
          </div>

          <div className="flex text-[20px] max-w-[50%] items-center">
          Being a Software Engineer isn’t always easy. That’s why taking care of both your mind and body is super important! Staying healthy helps you stay sharp, avoid burnout, and keep loving what you do—on and off the screen. 
          </div>
          <div className="flex gap-[20px] max-w-[90%] justify-evenly">
            <div className="flex flex-col gap-[20px]">
              
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/tools.svg"
                  alt="ai"
                  width={100}
                  height={100}
                  priority
                />
                To learn more about mental health click here
              
              </div>
              <Link className="flex justify-center bg-[#F0E4D3] hover:bg-gray-100 font-bold text-[30px] p-[50px] rounded-[15px] hover:rounded-[15px]" href="/topics/hub/mental">Learn More</Link>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/plus-box.svg"
                  alt="ai"
                  width={100}
                  height={100}
                  priority
                />
               To learn more about physical health click here
              </div>
              <Link className="flex justify-center bg-[#F0E4D3] hover:bg-gray-100 font-bold text-[30px] p-[50px] rounded-[15px] hover:rounded-[15px]" href="/topics/hub/physical">Learn More</Link>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}
