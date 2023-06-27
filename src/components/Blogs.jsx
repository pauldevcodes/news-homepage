// images
import gamingGrowth from "../images/image-gaming-growth.jpg";
import retroPCs from "../images/image-retro-pcs.jpg";
import laptops from "../images/image-top-laptops.jpg";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      headingNo: "01",
      img: retroPCs,
      heading: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: 2,
      headingNo: "02",
      img: laptops,
      heading: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
    },
    {
      id: 3,
      headingNo: "03",
      img: gamingGrowth,
      heading: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <section className=" mt-16 pb-20 mx-4 flex flex-col gap-y-8 xl:mx-[165px] xl:flex-row xl:gap-x-[30px]">
      {blogs.map(({ id, headingNo, img, heading, content }) => {
        return (
          <div key={id} className=" flex flex-row items-center gap-x-6">
            <img
              src={img}
              alt="illustrations of the different blogs"
              className=" w-[100px]"
            />
            <div>
              <h4 className=" mb-3 text-[#C5C6CE] text-[32px] font-bold leading-8">
                {headingNo}
              </h4>
              <h5 className=" mb-[9px] text-[#00001A] text-lg font-extrabold leading-6 hover:text-[#F15D51] hover:cursor-pointer">
                {heading}
              </h5>
              <h6 className=" text-[#5E607A] text-[15px] leading-[26px]">
                {content}
              </h6>
            </div>
          </div>
        );
      })}
    </section>
  );
}
