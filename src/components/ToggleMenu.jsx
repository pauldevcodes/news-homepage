export default function ToggleMenu({ navLinks, menu, setMenu }) {
    const handleClick = () => {
        setMenu(!menu)
    }
  return (
    <div className=" absolute top-0 right-0 w-full bg-black/50 min-h-screen">
      <div className=" h-full w-2/3 absolute right-0 bg-[#FFFDFA]">
        {/* container for navlinks */}
        <ul className=" mt-36 ml-6 flex flex-col gap-y-6">
          {navLinks.map(({ id, link }) => {
            return (
              <li
                key={id}
                onClick={handleClick}
                className=" capitalize text-[#00001A] text-lg leading-6"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
