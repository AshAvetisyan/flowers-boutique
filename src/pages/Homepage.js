import Header from "../Components/Header";
import HomeSection2 from "../Components/homepageComponents/HomeSection2";
import HomeSection3 from "../Components/homepageComponents/HomeSection3";
import HomeSection4 from "../Components/homepageComponents/HomeSection4";
import Slider from "../Components/Slider/Slider";

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <Slider />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
        </div>
    )
}

export default HomePage;