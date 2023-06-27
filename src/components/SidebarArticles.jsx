export default function SidebarArticles() {
  const articles = [
    {
      id: 1,
      heading: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
      hr: <hr className=" my-[29px] text-[#5E607A]" />,
    },
    {
      id: 2,
      heading: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
      hr: <hr className=" my-[29px] text-[#5E607A]" />,
    },
    {
      id: 3,
      heading: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <section className=" bg-[#00001A] px-[21px] py-6 lg:py-8 lg:px-6 xl:basis-1/3">
      <h2 className=" text-[#E9AA52] text-[32px] font-bold leading-8 mb-[35px] lg:text-[40px] lg:leading-10">
        New
      </h2>
      {/* container to display all articles */}
      <div>
        {articles.map(({ id, heading, content, hr }) => {
          return (
            <div key={id}>
              <h3 className=" text-[#FFFDFA] text-xl font-extrabold leading-6 mb-1 hover:cursor-pointer hover:text-[#E9AA52]">
                {heading}
              </h3>
              <p className=" text-[#C5C6CE] text-[15px] leading-[26px]">
                {content}
              </p>
              {hr}
            </div>
          );
        })}
      </div>
    </section>
  );
}
