import Banner from "../../components/banner/banner"
import SkillCarousel from "../../components/skillCarousel/skillCarousel"
import Header from "../../components/header/header"


export default function Landing(){
    return (
        <div>
            <Header/>
            <Banner/>
            <SkillCarousel/>
        </div>
    )
}