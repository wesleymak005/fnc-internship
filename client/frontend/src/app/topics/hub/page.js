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
            <Link className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] hover:bg-[#808080] p-[50px] hover:rounded-[15px] min-w-[33%] justify-center items-center" href="/topics/hub/future">
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
            </Link>
            <Link className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] hover:bg-[#808080] p-[50px] hover:rounded-[15px] min-w-[33%] justify-center items-center" href="/topics/hub/career">
              Learning Skills and Employment in Software Engineering
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
            </Link>
            <Link className="flex flex-col text-[20px] rounded-[15px] bg-[#FAF7F3] hover:bg-[#808080] p-[50px] hover:rounded-[15px] min-w-[33%] justify-center items-center" href="/topics/hub/health">
              Staying Healthy as a Software Engineer
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
            </Link>
        </div>
        </div>
      </main>
    </div>
  );
}
