import CategoryNavbar from "./CategoryNavbar";
import MainNav from "./MainNav";
import BreakingNews from "./BreakingNews";
import AdBanner from "./AdBanner";

const newsData = [
    "Mewar Express train timings changed as per previous schedule",
    "Committee formed to take action against black marketers and hoarders",
    "Curfew imposed in corona-affected areas of the city",
    "Prohibitory orders imposed in New Vinayak Nagar of Girwa",
    "450 people consumed Ayush Amrit Kwath",
    "Divisional Commissioner inspected the border check post",
    "Formation of district level team under COVID-19"
];

const Header = () => {
    return (
        <header>
            <CategoryNavbar />
            <BreakingNews news={newsData} />
            <AdBanner />
            <MainNav />
        </header>
    );
};

export default Header;
