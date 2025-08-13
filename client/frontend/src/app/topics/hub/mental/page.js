import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="font-sans flex justify-center min-h-screen ">
       
        <main className="flex gap-[32px] mt-[10%] justify-center">
            <div className="flex flex-col gap-[32px] items-center">
                <div className="flex text-[35px] inline items-center">
                     Mental Health as a Software Engineer
                </div>
                <Image
                    className="dark:invert mb-[30px]"
                    src="/mental.png"
                    alt="mental-health"
                    width={600}
                    height={200}
                    priority
                /> 
                <div className="flex py-[5px] text-[20px] w-[50%]">
                    Being a software engineer isn’t just about writing code—it’s 
                    about balancing deadlines, constantly learning, and sometimes 
                    feeling like the computer never gets tired, but you do.
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Challenges</h1>
                    <div className="text-[18px]">From working on late night tasks to 
                        endless work related notifications, it’s easy to feel overwhelmed. 
                        Long hours, remote work, isolation, and the pressure to always 
                        “keep up or stay updated” can take a toll on your mind and body. 
                        As deadlines pile up, meetings string together, and the constant demand 
                        to learn new tools or languages all come together, it leaves barely any 
                        time to take a breather. It’s a cycle that can make even the most passionate 
                        coder question if they chose the right career. In addition, with everything 
                        said and done, the need for work-life balance feels just out of reach.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Why It Matters</h1>
                    <div className="text-[18px]">Mental health struggles like burnout, anxiety, and 
                        imposter syndrome aren’t rare in tech. In some recent research, it was shown 
                        that over half of software engineers experience something called the impostor 
                        feelings, with women and minority groups being more severely affected. These 
                        feelings are also linked to lower productivity according to ACM Digital Library and arXiv.</div>
                    <div className="text-[18px] py-[20px]">Burnout is another major issue when it comes to software 
                        engineers, with surveys reporting that 57% to 83% of developers experience some sort of 
                        workplace burnouts, usually caused by high workloads, efficiency issues, and unclear goals. 
                        These conditions were also worsened during the pandemic according to Haystack Analytics and 
                        BleepingComputer.
                    </div>
                    <div className="text-[18px]">Furthermore, software engineers face higher rates of burnout 
                        and mental health challenges compared to other information workers, emphasizing the need for 
                        better mental health support in the industry (CHI Conference).
                    </div>
                    <div className="text-[18px] pt-5">And here’s the kicker: when your mental health suffers, your physical 
                        health often follows. Eye strain, poor posture, and fatigue can creep in fast. 
                    </div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">Healthy Practices for a Healthier You</h1>
                    <div className="text-[18px]">For your mind: To maintain a healthy mind, you must prioritize 
                        yourself first. Be prepared to set boundaries, take mindful breaks, connect with others, 
                        and don’t be afraid to seek support. Engage in activities you enjoy outside of work, 
                        practice mindfulness or meditation to manage your stress levels, and make time for quality sleep 
                        and hobbies to help you feel refreshed and recharged.</div>
                </div>
                <div className="flex inline items-center w-[50%]">
                    <h1 className="font-bold text-[20px] py-[10px]">The Takeaway</h1>
                    <div className="text-[18px]">Technology will always evolve and move fast, but your health deserves 
                        to move first. Taking care of your mental health is only half of the real way to future-proof 
                        your career (and your happiness).</div>
                </div>
                <Link className="" href="/topics/hub/physical">
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
