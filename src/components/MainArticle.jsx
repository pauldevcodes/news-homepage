import mobileWeb3 from "../images/image-web-3-mobile.jpg";
import desktopWeb3 from "../images/image-web-3-desktop.jpg";

export default function MainArticle() {
  return (
    <section className=" basis-2/3">
      {/* container for article image */}
      <div>
        <img src={mobileWeb3} alt="Web 3 illustration" className=" md:hidden" />
        <img
          src={desktopWeb3}
          alt="Web 3 illustration"
          className=" hidden md:block"
        />
      </div>
      {/* container for the article */}
      <div className=" mt-6 flex flex-col gap-y-4 lg:flex-row lg:gap-x-[30px] lg:mt-7">
        <h1 className=" font-extrabold text-[40px] leading-10 text-[#00001A] lg:text-[56px] lg:leading-[56px]">
          The Bright Future of Web 3.0?
        </h1>
        {/* container for the article description */}
        <div className="">
          <p className=" text-[15px] leading-[26px] text-[#5E607A] mb-6 lg:mb-[29px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className=" bg-[#F15D51] text-[#FFFDFA] text-sm font-bold leading-6 tracking-[4.4px] px-[33px] py-[13px] uppercase hover:bg-[#00001A]">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
