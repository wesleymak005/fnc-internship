import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="font-sans flex justify-center min-h-screen ">
       
        <main className="flex gap-[32px] mt-[10%] justify-center">
            <div className="flex flex-col gap-[32px] items-center">
                <div className="flex text-[35px] inline items-center">
                     Physical Health as a Software Engineer
                </div>
                <Image
                    className="dark:invert mb-[30px]"
                    src="/physical.jpg"
                    alt="physical-health"
                    width={600}
                    height={200}
                    priority
                /> 
                <div className="flex py-[5px] text-[20px] w-[50%]">
                Hours at a desk, eyes glued to screens, and endless cups of coffee—sound familiar?
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Challenges</h1>
                    <div className="text-[18px]">Tech work often means sitting for long stretches, typing nonstop, and forgetting the concept of “fresh air.” This can lead to back pain, eye strain, poor posture, and fatigue before you even realize it’s happening.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Why It Matters</h1>
                    <div className="text-[18px]">Physical health isn’t just about looking fit—it’s about feeling good and having the energy to focus. When your body is run-down, your work suffers, creativity dips, and burnout comes knocking faster.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Healthy Practices for a Healthier You</h1>
                    <div className="text-[18px]">For your body: stand, stretch, and move every hour; stay hydrated; eat balanced meals; and invest in an ergonomic workspace.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Takeaway</h1>
                    <div className="text-[18px]">Your brain might be the main tool for tech work, but your body is the machine that powers it. Keep it healthy, and you’ll code longer, think clearer, and feel better—on and off the job.</div>
                </div>
                <Link className="" href="/topics/hub/mental">
                <Image
                    className="dark:invert mb-[30px] hover:bg-gray-100 hover:rounded-[20px]"
                    src="/down.svg"
                    alt="down-arrow"
                    width={75}
                    height={75}
                    priority
                /> 
                </Link>
            </div>
        </main>
    </div>
  );
}
