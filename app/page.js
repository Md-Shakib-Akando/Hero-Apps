import Image from "next/image";
import playStore from '../public/assets/Group (1).png'
import appStore from '../public/assets/Group (2).png'
import Hero from '../public/assets/hero.png'
import TrendingApps from "./components/TrendingApps/page";
import CustomerReviews from "./components/CustomersReview/page";
import Contact from "./components/Contact/page";
export default function Home() {
  return (
    <main className="pt-15 bg-[#efeeee]">
      <section className="pt-20 max-w-11/12 mx-auto">
        <div className="max-w-4xl mx-auto flex justify-center items-center flex-col text-center gap-6 ">
          <h1 className=" text-4xl lg:text-7xl font-bold ">We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps</h1>
          <p className="text-justify md:text-lg mt-3">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className="mt-10 flex justify-center items-center gap-4">
          <button className=" font-bold border border-gray-300 px-4 py-2 rounded-md flex items-center gap-1 "><Image src={playStore} alt="Google Play" /> Google Play </button>
          <button className=" font-bold border border-gray-300 px-4 py-2 rounded-md flex items-center gap-1 "><Image src={appStore} alt="App Store" /> App Store</button>
        </div>
        <div className="flex justify-center  mt-10">
          <Image src={Hero} alt="Hero Image" />
        </div>
      </section>

      <section className="  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-6 rounded-lg">
        <div className="text-white">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-center">Trusted by Millions, Built for You</h2>
          <div className="flex justify-around items-center gap-9 md:gap-0  mt-10 flex-wrap max-w-7xl mx-auto">
            <div className="space-y-4 text-center">
              <p>Total Downloads</p>
              <h2 className=" text-4xl md:text-6xl font-bold">29.6M</h2>
              <p>21% more than last month</p>
            </div>
            <div className="space-y-4 text-center">
              <p>Total Downloads</p>
              <h2 className="text-4xl md:text-6xl font-bold">906K</h2>
              <p>46% more than last month</p>
            </div>
            <div className="space-y-4 text-center">
              <p>Total Downloads</p>
              <h2 className="text-4xl md:text-6xl font-bold">132+</h2>
              <p>31 more will Launch</p>
            </div>

          </div>
        </div>
      </section>
      <section className=" mt-8 max-w-11/12 mx-auto pb-5">
        <h1 className="text-center text-4xl md:text-6xl font-bold">Trending Apps</h1>
        <p className="text-center mb-6 mt-8 text-lg lg:text-xl text-gray-500">Explore All Trending Apps on the Market developed by us</p>
        <TrendingApps></TrendingApps>
      </section>
      <section className=" bg-white ">
        <CustomerReviews></CustomerReviews>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </main>
  );
}
