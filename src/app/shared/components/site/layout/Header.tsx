import AdBanner from "../AdBanner";
import BreakingNews from "../BreakingNews";
import CategoryNavbar from "../CategoryNavbar";
import MainNav from "../MainNav";

const newsData = [
    "अफीम एवं गेहूँ तोल केंद्र का सांसद जोशी ने किया निरीक्षण",
    "शहर में भारी बारिश की संभावना",
    "450 ने किया रक्तदान – नया रिकॉर्ड बना",
    "अफीम एवं गेहूँ तोल केंद्र का सांसद जोशी ने किया निरीक्षण",
    "शहर में भारी बारिश की संभावना",
    "450 ने किया रक्तदान – नया रिकॉर्ड बना",
    "अफीम एवं गेहूँ तोल केंद्र का सांसद जोशी ने किया निरीक्षण",
    "शहर में भारी बारिश की संभावना",
    "450 ने किया रक्तदान – नया रिकॉर्ड बना",
]

const Header = () => {
    return (
        <header>
            <CategoryNavbar />
            <BreakingNews news={newsData} />
            <AdBanner />
            <MainNav />
        </header>
    )
}

export default Header;