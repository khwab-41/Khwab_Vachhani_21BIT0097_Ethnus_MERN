import Image from "next/image";
import Header from "./Components/Header";
import { SocialIcon } from "react-social-icons";
import MainBody from "./Components/MainBody";
import About from "./Components/About";
import Experience from "./Components/Experience";

export default function Home() {
  return (
    <div className="bg-back_portfolio h-screen text-gray space-y-8 z-0 snap-y overflow-scroll pb-32">
      <Header />
      <section className="">
        <MainBody />
      </section>
      <section className="">
        <About />
      </section>
      {/* Experience */}
      <section className="text-center">
        <Experience />
      </section>
    </div>
  );
}
