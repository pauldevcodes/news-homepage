import { useState } from "react";

// COMPONENTS
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import SidebarArticles from "./components/SidebarArticles";

export default function App() {
  const [opacity, setOpacity] = useState(false)
  return (
    <div className=" bg-off-white min-h-screen">
      <Header />
      <main>
        <div className=" flex flex-col gap-y-16 mx-4 xl:flex-row xl:gap-x-[30px] xl:mx-[165px]">
          <MainArticle />
          <SidebarArticles />
        </div>
        <Blogs />
      </main>
    </div>
  );
}
