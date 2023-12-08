import "./App.css";

import Avatar from "./components/Avatar";
import CartList from "./components/CartList";
import Favourite from "./components/Favourite";
import MyOrder from "./components/MyOrder";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Search from "./components/Search";
import SubNavbar from "./components/SubNavbar";
import TopMeals from "./components/TopMeals";
import TrendingMeals from "./components/TrendingMeals";

function App() {
  return (
    <main className="flex  justify-between min-h-screen text-base text-slate-600 bg-light-grey">
      <section className="basis-1/6 bg-regal-green p-5 rounded-tr-3xl rounded-br-3xl ">
        <Avatar />
        <Navbar />
      </section>

      <section className="basis-4/6 p-5">
        <Search />
        <TrendingMeals />
        <TopMeals />
        <Favourite />
      </section>

      <section className="basis-1/4 py-5 pr-5 ">
        <SubNavbar />
        <MyOrder />
        <CartList />
        <Payment />
      </section>
    </main>
  );
}

export default App;
