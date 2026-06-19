import FeaturedTasks from "@/components/home/FeaturedTasks";
import HeroSection from "@/components/home/HeroSection";
import TopFreelancers from "@/components/home/TopFreelancers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Statistics from "@/components/home/Statistics";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <HeroSection />
         <FeaturedTasks />
         <TopFreelancers />
         <WhyChooseUs />
         <Statistics />
      
      </main>
    </div>
  );
}
