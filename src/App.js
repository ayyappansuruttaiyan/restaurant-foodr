import "./App.css";
import Avatar from "./components/Avatar";
import Favourite from "./components/Favourite";
import MyOrder from "./components/MyOrder";
import Payment from "./components/Payment";
import Search from "./components/Search";
import SubNavbar from "./components/SubNavbar";
import TopMeals from "./components/TopMeals";
import TrendingMeals from "./components/TrendingMeals";

function App() {
  return (
    <main className="flex justify-between min-h-screen">
      {/* navbar section starts */}
      <section className="basis-1/6 bg-slate-300 ">
        <Avatar />
      </section>
      {/* navbar section ends */}
      {/* production section starts */}
      <section className="basis-4/6 bg-slate-200">
        <Search />
        <TrendingMeals />
        <TopMeals />
        <Favourite />
      </section>
      {/* production section ends */}
      {/* order section starts */}
      <section className="basis-1/6 bg-slate-300">
        <SubNavbar />
        <MyOrder />
        <Payment />
      </section>
      {/* order section ends */}
    </main>
  );
}

export default App;
