import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Header/Examples";

function App() {


    return (
        <>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;
