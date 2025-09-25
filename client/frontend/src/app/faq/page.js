import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-sans flex justify-center min-h-screen">
      
      <main className="flex gap-[32px] mt-[10%] justify-center">
        <div className="flex flex-col gap-[32px] items-center">
          <Image
            src="/csse.jpg"
            alt="csse"
            width={1000}
            height={100}
            priority
          />
          <div className="flex text-[50px] justify-center">
            About Us
          </div>

          <div className="flex text-[20px] max-w-[50%] items-center">
          Welcome to our website! We are undergraduate software engineering 
          students in the C2L-PHL program under the Federation of Neighborhood Centers, 
          creating this site to share our research. Our goal is to support first and second-year 
          students in similar situations who may feel uncertain about their path. We aim to bridge 
          the gap between what’s taught in college and the realities of entering the workforce, covering 
          skills to learn, what companies seek in interns, and the health implications of a software 
          engineering career. We also address the current AI boom, clarifying its impact on the field’s 
          future.
          </div>
          <div className="flex gap-[20px] max-w-[90%] justify-evenly pt-10">
            <div className="flex flex-col gap-[20px]">
              <div>
                <div className="flex flex-col text-[50px] justify-center">
                  The Team Behind
                  <div>  The screen</div>
                </div>
                <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] mr-[50px] p-[50px] min-w-[33%] justify-center items-center dark:text-black">
                  <Image 
                    className=""
                    src="/wesley.png"
                    alt="wes"
                    width={300}
                    height={1}
                    priority
                  />
                  Wesley Mak
                  <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px] h-[100px] text-center">
                    <div>Class of 2028 at Drexel University </div>
                  </div>
                </div>
                </div> 
            </div>

            <div className="flex flex-col gap-[20px]">
            <div>
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center dark:text-black">
                <Image 
                  className=""
                  src="/max.png"
                  alt="max"
                  width={300}
                  height={1}
                  priority
                />
                Max Tran
                <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px] h-[100px] text-center">
                  <div>Class of 2027 at the University of</div>
                  <div>Pennsylvania</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] p-[50px] min-w-[33%] justify-center items-center dark:text-black">
                <Image 
                  className=""
                  src="/leo.png"
                  alt="leo"
                  width={300}
                  height={1}
                  priority
                />
                Leo Li
                <div className="flex flex-col justify-start self-start border-t border-gray min-w-[90%] pt-[10px] text-[17px] h-[100px] text-center">
                  <div>Class of 2028 at Drexel University </div>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}
