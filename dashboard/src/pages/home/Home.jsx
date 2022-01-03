
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";


export default function Home() {
  return (
    <div className="home">
    
      <div className="homeWidgets">
        <FeaturedInfo />
        <WidgetSm/>
      </div>
    </div>
  );
}