import "../css/MainPage.css";
import {
    Navbar,
    Header,
    Skill,
    Download,
    Faq,
} from "../components/index";

function Portfolio() {
    return (
        <main>
            <header className="header-bg">
                <Navbar />
                <Header />
            </header>
            <Skill />
            <Faq />
            <Download />
        </main>
    );
}

export default Portfolio;