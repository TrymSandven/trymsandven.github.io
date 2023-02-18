import "../css/MainPage.css";
import {
    Heading,
    Homepage,
} from "../components/index";

function MainPage() {
    return (
        <main>
            <header className="header-bg">
                <Heading />
                <Homepage />
            </header>
        </main>
    );
}

export default MainPage;