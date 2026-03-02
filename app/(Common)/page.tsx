import Image from "next/image";
import AboutPage from "./About/page";
import HomePage from "./Home/Home";
import HomeCard from "./Home/HomeCard";
// import { BugReportForm } from "./Com/Login/page";

export default function Home() {
  return (
    // <div><BugReportForm /></div>
    <div className=" h-screen">
      <HomePage></HomePage>
      <HomeCard></HomeCard>
    </div>
  );
}
