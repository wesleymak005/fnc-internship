import Image from "next/image";

export default function Home() {
  return (
    
    <div className="font-Roboto font-bold flex flex col items-center justify-center min-h-screen ">
      <main className="flex flex-col gap-[150px] items-center pt-[150px]">
        <div className="flex flex-row">
        <div className="flex justify-start flex-col ml-[20px] font-mono text-[90px]">
          <p>The Importance</p> 
          <p>of</p>
          <p>Mental and Physical Health</p>
          <div className="font-sans text-[30px] text-[#808080] mt-[50px]">A guide on how to stay healthy mentally and physically as a software engineer.</div>
        </div>
          <Image
            src="/sign-caution.svg"
            alt="future"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="flex justify-between min-w-[100%]">
          <div className="flex ml-[20px] bg-[#DCC5B2] h-[600] w-[900] rounded-[50px] p-[50px] text-[40px]">
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
