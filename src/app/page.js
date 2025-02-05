import TrainingSection from "./components/TrainingSection";
import CompanyStats from "./components/CompanyStats";
import Excercise from "./components/Excercise";
import Slider from "./components/Slider";
import WelcomePage from "./components/WelcomePage";
import TimetableBMI from "./components/TimeTableBMI";
import FitnessDiscount from "./components/FitnessDiscount";
import Footer from "./components/Footer";
import CopyrightSection from "./components/CopyrightSection";

export default function Home() {
  return (
    <div className="container mx-auto bg-[#161E2A] font-inter">
      <Slider />
      <Excercise />
      <WelcomePage />
      <CompanyStats />
      <TrainingSection />
      <TimetableBMI />
      <FitnessDiscount />
      <Footer />
      <CopyrightSection />
    </div>
  );
}
