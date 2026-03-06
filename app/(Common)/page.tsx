import Image from "next/image";
import AboutPage from "./About/page";
import HomePage from "./Home/Home";
import HomeCard from "./Home/HomeCard";
import Footer from "@/components/footer";
// import { BugReportForm } from "./Com/Login/page";

export default function Home() {
  return (
    // <div><BugReportForm /></div>
    <div className="  ">
      <HomePage></HomePage>
      <div>
        <HomeCard></HomeCard>
      </div>
      <div></div>
    </div>
  );
}
