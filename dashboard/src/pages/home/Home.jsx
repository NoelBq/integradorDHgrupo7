
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Chart from '../../components/chart/Chart'


export default function Home() {
  return (
    <div className="home">
    
      <div className="homeWidgets">
        <FeaturedInfo />
        <Chart/>

      </div>
    </div>
  );
}