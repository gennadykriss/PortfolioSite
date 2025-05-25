import Landing from "../components/Landing";
import ServiceSite from "../components/ServiceSite";
import Game from "../components/Game";
import Ecommerce from "../components/Ecommerce";
import Analytics from "../components/Analytics";

export const Home = () => {
  return (
    <div className="relative">

      {/* Main Content */}
      <main>
        <Landing />
        <ServiceSite />
        <Game />
        <Ecommerce />
        <Analytics />
      </main>

    </div>
  );
};
