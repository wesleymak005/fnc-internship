/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-Roboto font-bold flex flex col items-center justify-center min-h-screen ">
      <main className="flex flex-col gap-[150px] items-center pt-[150px]">
        <div className="flex flex-row">
        <div className="flex justify-start flex-col ml-[30px] font-mono text-[70px]">
          <p>The Path To Getting Hired:</p>
          <p>Skills & Tools</p>
          <div className="font-sans text-[30px] text-[#808080] mt-[50px]">What does it take to land a software engineering internship/job?</div>
        </div>
          <Image
            src="/istockphoto-1298405314-612x612.jpg"
            alt="future"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="flex justify-between min-w-[100%]">
          <div className="flex ml-[20px] bg-[#DCC5B2] h-[600] w-[900] rounded-[50px] p-[50px] text-[22px]">
            Computer scientists often say the software engineering (SWE) career path is oversaturated, as if the market is overflowing and there’s no point in trying. Fortunately, that’s not 100% the case. What might seem like a daunting and impossible task, landing a job in software engineering is not as unachievable as modern society may suggest. According to the Bureau of Labor Statistics, software development jobs are projected to increase by 18% from 2023-33, which is above average compared to other related industries. Truth is, a lot of aspiring software engineers don't have a great understanding of what the path actually looks like — and it’s not their fault. Sure, universities teach you how to code, but they don't necessarily teach you how to get hired. There’s no class on building a solid resume, doing the right kinds of projects, or grinding through LeetCode problems, so it's easy to feel lost. This section of the guide teaches you what it takes to land a SWE internship/job.
          </div>
            <Image
              className="dark:invert"
              src="/job_outlook.png"
              alt="wip"
              width={600}
              height={600}
              priority
            />
        </div>
        <div className="flex justify-end min-w-[100%]">
            <Image
              className="dark:invert -mr-[200px] z-1"
              src="/sign-caution.svg"
              alt="wip"
              width={600}
              height={600}
              priority
            />
         <div className="flex ml-[20px] bg-[#D9A299] h-[600] w-[1500] pl-[250px] p-[50px] text-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer quis mauris malesuada, accumsan nunc consectetur, aliquam quam.
              Quisque quis dui luctus quam maximus sollicitudin. 
              Nullam vestibulum pharetra tellus quis vestibulum. 
              Nullam lacinia turpis nisl, vitae rhoncus ex suscipit ac. 
          </div>
        </div>
        <div className="flex justify-between min-w-[100%]">
          <div className="flex ml-[20px] h-[600] w-[900] rounded-[50px] p-[50px] text-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer quis mauris malesuada, accumsan nunc consectetur, aliquam quam.
              Quisque quis dui luctus quam maximus sollicitudin. 
              Nullam vestibulum pharetra tellus quis vestibulum. 
              Nullam lacinia turpis nisl, vitae rhoncus ex suscipit ac. 
          </div>
            <Image
              className="dark:invert"
              src="/sign-caution.svg"
              alt="wip"
              width={600}
              height={600}
              priority
            />
        </div>
      </main>
    </div>
  );
}
