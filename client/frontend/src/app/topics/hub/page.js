/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="font-sans flex justify-center min-h-screen ">
      
      <main className="flex gap-[32px] mt-[10%] justify-center">
        <div className="flex flex-col gap-[32px] items-center">
          <div className="flex text-[50px] justify-center">
            Start Reading!
          </div>

          <div className="flex text-[20px] max-w-[50%] items-center">
            We've compiled our research into three easily digestible categories. We'd like to present our research on the future of AI in the field, 
            steps needed to break into the field, and how to stay healthy when working in this field.
          </div>
          <div className="flex gap-[20px] max-w-[90%] justify-evenly">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] w-[400px] h-[700px] justify-start items-center overflow-y-auto">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/robot-outline.svg"
                  alt="ai"
                  width={100}
                  height={100}
                  priority
                />
                The Future of AI in Software Engineering
                <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px]">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div>Integer quis mauris malesuada, accumsan nunc consectetur, aliquam quam. </div>
                  <div>Quisque quis dui luctus quam maximus sollicitudin. </div>
                  <div>Nullam vestibulum pharetra tellus quis vestibulum. </div> 
                  <div>Nullam lacinia turpis nisl, vitae rhoncus ex suscipit ac. </div>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <div>Pellentesque accumsan metus non tincidunt feugiat. </div>
                  <div>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </div>
                  <div>Etiam maximus purus at lorem tristique aliquam. </div>
                  <div>In id fringilla neque.</div>
                </div>
              </div>
              <Link className="flex justify-center bg-[#F0E4D3] hover:bg-gray-100 font-bold text-[30px] p-[50px] rounded-[15px] hover:rounded-[15px]" href="/topics/hub/future">Learn More</Link>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] w-[400px] h-[700px] justify-start items-center overflow-y-auto">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/tools.svg"
                  alt="ai"
                  width={100}
                  height={100}
                  priority
                />
                Learning Skills and Employment
                <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px] h-[580px]">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div>Integer quis mauris malesuada, accumsan nunc consectetur, aliquam quam. </div>
                  <div>Quisque quis dui luctus quam maximus sollicitudin. </div>
                  <div>Nullam vestibulum pharetra tellus quis vestibulum. </div> 
                  <div>Nullam lacinia turpis nisl, vitae rhoncus ex suscipit ac. </div>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <div>Pellentesque accumsan metus non tincidunt feugiat. </div>
                  <div>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </div>
                  <div>Etiam maximus purus at lorem tristique aliquam. </div>
                  <div>In id fringilla neque.</div>
                </div>
              </div>
              <Link className="flex justify-center bg-[#F0E4D3] hover:bg-gray-100 font-bold text-[30px] p-[50px] rounded-[15px] hover:rounded-[15px]" href="/topics/hub/career">Learn More</Link>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] w-[400px] h-[700px] justify-start items-center overflow-y-auto">
                <Image 
                  className="dark:invert mb-[30px]"
                  src="/plus-box.svg"
                  alt="ai"
                  width={100}
                  height={100}
                  priority
                />
                Staying Healthy as a Software Engineer
                <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px] max-w[30%]">
                  <div>In the workforce, software engineering is one of the most demanding information careers. </div>
                  <div className="pt-[10px]">With tech evoloving and everchanging, it is more important that ever to prioritize 
                    your health as a software engineer. </div>
                  <div className="pt-[10px]">This section will cover many topics including: </div>
                  <li className="pt-[10px]">The Challenges</li>
                  <li>Why It Matters</li>
                  <li>Healthy Practices</li>
                  <li>The Takeaway</li>
                  <div className="pt-[10px]">Long hours, tight deadlines, and constant notifications can take a toll on both mind and body. Burnout, impostor feelings, eye strain, and poor posture are common issues. By taking care of your mental and physical health, you can stay productive, think clearly, and enjoy a sustainable career.</div>
                  <div className="pt-[10px]">Focusing on wellness helps you build resilience, manage stress more effectively, and maintain a balance between work and life. With the right habits, you can approach your software engineering journey with energy, confidence, and a clearer sense of direction</div>
                </div>
              </div>
              <Link className="flex justify-center bg-[#F0E4D3] hover:bg-gray-100 font-bold text-[30px] p-[50px] rounded-[15px] hover:rounded-[15px]" href="/topics/hub/health">Learn More</Link>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}
