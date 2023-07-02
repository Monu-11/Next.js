import Header from "@/components/Header";
import Page from "@/components/Page";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex fixed h-full w-full -z-0 mt-64">
          <Sidebar />
          <div className="w-full flex h-full -z-0 mt-1 max-md:mt-0">
            <Page />
          </div>
        </div>
      </div>
    </main>
  );
}
