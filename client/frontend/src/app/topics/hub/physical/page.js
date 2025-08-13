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
                Hours sitting at a desk, eyes glued to screens, and endless cups of caffine. 
                Sound familiar?
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Challenges</h1>
                    <div className="text-[18px]">Tech work, usually coding, often means sitting 
                        for long stretches, nonstop typing, and forgetting the concept of “fresh 
                        air or touching grass.” This can lead to back pain, eye strain, poor posture, 
                        loss of time, and fatigue before you even realize it’s happening. </div>
                <div className="text-[18px] pt-5">Furthermore, sitting for long periods increases the risk 
                    of musculoskeletal issues like back pain and poor posture (Straker & Mathiassen), 
                    while prolonged screen use can lead to Computer Vision Syndrome, causing eye strain 
                    and discomfort (Blehm et al). </div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Why It Matters</h1>
                    <div className="text-[18px]">Physical health isn’t just about looking fit, it’s about 
                        feeling good and having the energy to focus. When your body is weak, your work 
                        suffers, creativity declines, and burnout becomes more likely. Research by Oosterhoff 
                        et al. shows that poor posture and fatigue reduce cognitive function and creativity, 
                        while Salvagioni et al. found that physical strain and unhealthy habits significantly 
                        increase the risk of burnout. 
                    </div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Healthy Practices for a Healthier You</h1>
                    <div className="text-[18px]">For your body: To maintain a healthy body, be sure to take breaks 
                        to stand, stretch, and move every hour. In addition, prioritize your nutrition by staying 
                        hydrated, eating balanced meals, and creating a comfortable workspace. Exercise and quality 
                        sleep should also not be disregarded, as they are essential for restoring energy and keeping 
                        you at your best physically. There are also some techniques people use, such as the 20-20-20 rule 
                        (every 20 minutes, look at something 20 feet away for 20 seconds) to help reduce stress on their
                         eyes while working in front of screens.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Takeaway</h1>
                    <div className="text-[18px]">Your brain might be the main tool for coding, but your body is the machine 
                        that powers it. By keeping it strong and healthy, you’ll be able to code longer and think clearer. 
                        Taking care of your physical health is only half of what you need to do to feel better on and off 
                        the job. </div>
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
