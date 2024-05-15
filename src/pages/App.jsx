import Hero from "../components/HomePageComps/Hero";
import BtnGroup from "../components/HomePageComps/BtnGroup";
import OverallReviews from "../components/HomePageComps/OverallReviews";
import CustomerReviews from "../components/HomePageComps/CustomerReviews";
import Navbar from '../components/HomePageComps/Navbar.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="my-32 flex flex-col gap-y-32">
        <Hero />
        <BtnGroup />
        <OverallReviews />
        <CustomerReviews />
      </main>
    </>
  )
}