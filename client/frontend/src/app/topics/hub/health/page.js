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

          <div className="flex text-[20px] py-[20px] max-w-[50%] items-center">
          Being a Software Engineer isn’t always easy. That’s why taking care of both your mind and body is super important! Staying healthy helps you stay sharp, avoid burnout, and keep loving what you do—on and off the screen. 
          </div>
          <div className="flex gap-[20px] max-w-[90%] justify-evenly">
            <div className="flex flex-col gap-[20px]">
              
            </div>
            <div className="flex flex-col gap-[20px]">
              <Link className="flex flex-col text-[20px] hover:bg-gray-100 rounded-[50px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center" href="/topics/hub/mental">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/mind.svg"
                  alt="brain"
                  width={100}
                  height={100}
                  priority
                />
                To learn more about mental health click here
              
              </Link>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Link className="flex flex-col text-[20px] hover:bg-gray-100 rounded-[50px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center" href="/topics/hub/physical">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/muscle.svg"
                  alt="muscle"
                  width={100}
                  height={100}
                  priority
                />
               To learn more about physical health click here
              </Link>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}
