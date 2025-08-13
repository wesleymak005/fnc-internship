/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-Roboto flex flex col items-center justify-center min-h-screen ">
      <main className="flex flex-col gap-[100px] items-center pt-[100px]">
        <div className="flex flex-row">
        <div className="flex justify-start flex-col ml-[20px] font-mono text-[90px] font-bold ">
          <p>The Future of AI</p> 
          <p>in</p>
          <p>Software Engineering.</p>
          <div className="font-sans text-[30px] text-[#808080] mt-[50px]">An article on the future of the field, and how AI has already impacted it.</div>
        </div>
          <Image
            src="/r46719.jpg"
            alt="future"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="flex ml-[20px] p-[50px] text-[28px] w-[1000px] flex-col indent-10">
            <div>

              With the recent developments of generative AI, it’s started to become ingrained in the daily lives of many. Currently valued at ~$48B, the generative AI industry as evaluated by Bloomberg, “is poised to explode [to] $1.3 trillion over the next 10 years”. There’s no doubt that the AI industry has redefined innovation and has become Silicon Valley’s new favourite toy. However, within its own industry, murmurs of being replaced by the tools they’re developing are being heard. The replacement of entry-level positions and automation has plagued much discussion in software engineering and computer science circles. Yet, even regardless of occupation, many have begun to wonder how close it’s getting to replacing their jobs. Although many anecdotal stories push a cynical narrative of generative AI automating too many tasks, making certain jobs redundant, there are just as many saying otherwise. The relationship between AI and software engineering is nuanced, but when looking at trends and data, it’s clear there’s still demand, with projections showing future growth. 

            </div>
            <div className="my-[8px]"></div>
            <div>

              This article aims to answer the many questions regarding AI and the field of software engineering. Specifically, we are looking to see the impact it’s had on the field within the past few years, and how we can project its influence over the coming years.

            </div>
        </div>
        <div className="flex justify-evenly min-w-[100%] items-center">
          <div className="flex ml-[20px] bg-[#DCC5B2] h-[600] w-[900] rounded-[100px] p-[50px] text-[58px] font-bold items-center">

            "Many Americans think AI will have a strongly negative impact on workers and themselves in the next 10 years"       

          </div>
            <Image
              className="dark:invert"
              src="/prcai.png"
              alt="aistats"
              width={896}
              height={611.8}
              priority
            />
        </div>
        <div className="flex ml-[20px] p-[50px] text-[28px] w-[1000px] flex-col indent-10">
            <div>

              Looking at many articles, it’s obvious that there are clear stances on both sides. Some view AI as a threat to job security in the future, while others see it as an opportunity. As Steve Lohr, a reporter for the New York Times, writes: “the outlook for software developers is more likely evolution than extinction”. Although AI is viewed as impactful, some in the space view AI as another tool to learn and add to, rather than an obstacle to overcome. Being able to automate certain mundane tasks, or using AI to aid with more complex development problems and incorporate it into everyday workflow has become an appealing option to developers. This perspective is one where AI is used to augment a programmer's capabilities, rather than replace them.

            </div>
            <div className="my-[8px]"></div>
            <div>

              Even with the public enamoured by the utility of generative AI, it cannot be understated how wary Americans are of its impact. According to the Pew Research Center, 62% of Americans believe AI will impact workers, and 64% of Americans believe AI will have a zero to negative net impact. Many Americans think AI will have a strongly negative impact on workers and themselves in the next 10 years. As Kevin Roose, a technology columnist for The New York Times, states, “unemployment for recent graduates was heavily concentrated in technical fields like finance and computer science, where A.I. has made faster gains”. Roose echoes the fears of many, where AI may soon replace entry-level positions.
            
            </div>
          </div>

        <div className="flex justify-end min-w-[100%]">
            <Image
              className="dark:invert -mr-[200px] z-1"
              src="/robot-excited-outline.svg"
              alt="robot"
              width={600}
              height={600}
              priority
            />
         <div className="flex ml-[20px] bg-[#D9A299] h-[600] w-[1500] pl-[250px] p-[50px] text-[40px] flex-col">

              If we look at both sides, we get a mixture of opinions with no clear consensus. We need to look at the numbers. According to the U.S. Bureau of Labor Statistics for software developers:
              <ul>
                <li className="indent-10">• +17% projected employment by 2033 (4% global average)</li>
                <li className="indent-10">• +17.9% employment change 2022-2023</li>
              </ul>
              These numbers show us that there’s still increasing demand for software developers, and that the emergence of AI has not killed demand in the field.

          </div>
        </div>
        <div className="border-t border-gray min-w-[1000px] -my-[20px]"></div>
        <div className="flex justify-evenly min-w-[100%] items-first">
          <div className="flex flex-col h-[1000] w-[800] rounded-[100px] p-[50px] ml-[20px] text-[28px] indent-10 ">
            <div className>

              Looking at the statistics to the right, it can be seen that unemployment and employment numbers at the national level are still healthy. The rise of AI has yet to majorly impact on employment numbers, and projections going forward are still healthy. The major spikes seen were the result of a global pandemic in 2020.             
              
            </div>
            <div className="my-[8px]"></div>
            <div>

              The current unemployment numbers, although on a slight rise, are similar to pre-pandemic numbers. Especially, going back to early 2018, there was a 4% unemployment rate, compared to today’s 4.2%. This is relatively negligible, and any increase cannot be pinned down to purely AI, but rather a culmination of other factors. Considering the unemployment trend started its slight increase in 2021, before generative AI had a major impact on the market, it can be concluded that this increase is not from AI.
              
            </div>
            <div className="my-[8px]"></div>
            <div className>

              From the projected employment numbers from 2023 to 2033, the increase is still visibly healthy. There is a slight decrease from the ~2012-2018 employment boom, but only by ~1%. Again, this decrease is somewhat negligible and cannot be pinned directly as a result of the increased use of AI. 
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly">
            <Image
              className="dark:invert"
              src="/unem.png"
              alt="unemeployment"
              width={686}
              height={565.5}
              priority
            />
            <Image
              src="/employ.png"
              alt="employment"
              width={853}
              height={481}
              priority
            />

          </div>
        </div>
        <div className="border-t border-gray min-w-[1000px] -mt-[20px] -mb-[60px]"></div>
        <div className="flex ml-[20px] p-[50px] text-[28px] w-[1000px] flex-col indent-10">
            <div>

              The key takeaways of this topic should be that it’s incredibly nuanced with valid points on both sides. With an emerging technology like AI, there is bound to be strong voices on both sides. Although briefly mentioned, one of the missed discussion points is the surrounding senior and junior-level positions. There will still be demand for software engineers, and the demand will still increase in the future; however, there may be less demand for junior-level positions of the current archetype. Entry-level positions will always exist, but the bar for entry may simply be higher in the future. AI is here to stay; we just need to learn how to adapt to it.             
            
            </div>

        </div>
      </main>
    </div>
  );
}
