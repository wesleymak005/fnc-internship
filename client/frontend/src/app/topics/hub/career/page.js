/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="font-Roboto flex flex col items-center justify-center min-h-screen ">
      <main className="flex flex-col gap-[50px] items-center pt-[150px]">
        <div className="flex flex-row">
        <div className="flex justify-start flex-col ml-[20px] font-mono text-[90px]">
          <p>The Path To Getting Hired:</p>
          <p>Skills & Tools</p>
          <div className="font-sans text-[30px] text-[#808080] mt-[20px]">A roadmap to the skills and tools needed for an aspiring programmer's first job.</div>
        </div>
          <Image
            src="/career-header.jpg"
            alt="future"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="flex justify-between min-w-[100%]">
          <div className="font-sans flex ml-[20px] bg-[#DCC5B2] h-[600] w-[900] rounded-[50px] items-center p-[50px] text-[22px]">
            Computer scientists often say the software engineering (SWE) career path 
            is oversaturated, as if the market is overflowing and there’s no point in 
            trying. Fortunately, that’s not 100% the case. What might seem like a 
            daunting and impossible task, landing a job in software engineering is not 
            as unachievable as modern society may suggest. According to the Bureau of 
            Labor Statistics, software development jobs are projected to increase by 18 
            percent from 2023-33, which is above average compared to other related 
            industries. Truth is, a lot of aspiring software engineers don't have a great
            understanding of what the path actually looks like — and it’s not their fault. 
            Sure, universities teach you how to code, but they don't necessarily teach you 
            how to get hired. There’s no class on building a solid resume, doing the right 
            kinds of projects, or grinding through LeetCode problems, so it's easy to feel 
            lost. This section of the guide teaches you what it takes to land a SWE 
            internship/job.

          </div>
            <Image
              className="dark:invert"
              src="/job-outlook.png"
              alt="wip"
              width={600}
              height={600}
              priority
            />
        </div>
        <h1 className="font-mono font-bold text-[40px] py-[5px]"> The Application</h1>
        <div className="font-sans text-[22px] w-[50%]"> Every search for a job/internship begins with the application, but 
        ultimately the quality of the search goes as far as the quality of the resume. 
        Having a strong resume will allow you to get a foot into the door–the door that 
        modern society claims is oversaturated. Oftentimes, this is your only chance to show 
        employers why YOU should be hired, so make it count! </div>
        <div className="grid grid-cols-3 gap-8 p-8">
          {/* Work Experience */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">Work Experience</h2>
            <ul className="font-sans list-disc pl-5 text-center">
              Even if you haven’t had a “real” SWE job, you 
              can still show work experience. Freelance work, 
              part-time gigs, tutoring, or even volunteering 
              for a coding project all count. What’s most 
              important is highlighting impact in a tangible 
              way–whether that’s through data or testimonies.
            </ul>

            <ul className="font-sans list-disc mt-[20px] pl-5 text-center">
            Free-Time Suggestion: get involved in some sort of coding endeavor 
            in your community!
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-sans text-xl font-bold mb-4 text-center">Projects</h2>
            <ul className="font-sans list-disc pl-5 text-center">
              Projects are evidence that you can take an idea
              and make it real. They should live online 
              (GitHub, personal website) and be easy to find 
              on your resume. Go for variety — maybe one personal
              passion project, one that solves a real-world problem, 
              and one shows off your technicality. Bonus points if 
              you use the same tech stack that your target companies 
              use.
            </ul>
            <ul className="font-sans list-disc mt-[20px] pl-5 text-center">
            Free-Time Suggestion: start a project that you enjoy doing!
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-sans text-xl font-bold mb-4 text-center">Skills</h2>
            <ul className="font-sans list-disc pl-5 text-center">
              Don’t just copy-paste every language you’ve ever heard of. 
              List the ones you’re confident in, and organize them 
              in a way that makes sense (e.g., Languages, 
              Frameworks, Tools). If you can, back them up with 
              context — “React (used in 3 personal projects)” reads 
              way better than just “React.”
            </ul>
            <ul className="font-sans list-disc mt-[20px] pl-5 text-center">
            Free-Time Suggestion: learn a new language/stack!
            </ul>
          </div>
        </div>

        <div className="flex justify-end min-w-[80%]">
            <Image
              className="dark:invert -mr-[20px] z-1"
              src="/interviewing.png"
              alt="wip"
              width={400}
              height={600}
              priority
            />

        <div className="flex flex-col ml-[20px] bg-[#D9A299] h-[400] w-[800] rounded-[50px] pl-[80px] p-[50px] text-[22px]">
            {/* Header */}
            <h2 className="font-mono text-5xl font-bold mb-6 item-center">The Interview</h2>  
            {/* Body Text */}
            <ul className="font-sans">
              The final (and lengthy) stage of the process is the interview. 
              Each company has their own unique structures, but mostly consist 
              of the behavioral and technical sections. Through these interviews, 
              employers are able to gain a deeper understanding of you as a person. 
              The <Link
                href="https://www.techinterviewhandbook.org/software-engineering-interview-guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Interview Handbook
              </Link> sums up this section to a tee. With enough 
              planning and preparation, any SWE job can be obtained.
              </ul>        
              
          </div>
          
        </div>
        
        <div className="grid grid-cols-2 gap-8 p-3">
        <div>
            <h2 className="font-sans text-xl font-bold mb-4 text-center">Behavioral</h2>
            <ul className="font-sans list-disc pl-5 text-center">
              It’s vital to be yourself and answer honestly. Interviewers 
              want to see who you are—not just what you code. The Handbook 
              includes sections on behavioral prep and building self-intros 
              and thoughtful questions to ask in return. Show them you’re curious, 
              collaborative, and engaged, not just technically capable. 
              
              Understandably so, not everyone is great at interviewing. 
              Mock interviews are the best way to prepare for these. It’s 
              important to internalize the reality that not every interview 
              is going to go well. Keep on applying and eventually things 
              will work out!
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xl font-bold mb-4 text-center">Technical</h2>
            <ul className="font-sans list-disc pl-5 text-center">
              This part of the interview is an insight to your mental process 
              when coding. It allows you to be creative, and you don’t necessarily 
              need to get everything right. Ask clarifying questions, walk through
              your logic, and explain your trade-offs. This “over-communication” 
              is arguably the most important aspect and can set you apart from 
              others.

              As for LeetCode, the Handbook puts it best: “nobody has time to grind hundreds of 
              LeetCode questions.” Using a free online roadmap, such as Neetcode.io, 
              and studying the type of questions along with its corresponding trends 
              is the best way to study questions asked typically in technicals. 

            </ul>
          </div>
        </div>

       
      </main>
    </div>
  );
}
