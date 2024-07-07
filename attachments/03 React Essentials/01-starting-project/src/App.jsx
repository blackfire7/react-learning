import {useState} from 'react';

import {CORE_CONCEPTS, EXAMPLES} from "./data";
import {Header} from "./components/Header/Header";
import {CoreConcept} from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
            </div>
        );
    }


    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>

                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>

                    {/*3 different ways to show content conditionally*/}


                    {/*1.*/}

                    {/*{selectedTopic ? (<div id="tab-content">*/}
                    {/*    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*    <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*    <pre>*/}
                    {/*        <code>{EXAMPLES[selectedTopic].code}</code>*/}
                    {/*    </pre>*/}
                    {/*</div>) : <p>Please select a topic.</p>}*/}


                    {/*2.*/}

                    {/*{!selectedTopic && <p>Please select a topic.</p>}*/}
                    {/*{selectedTopic && (<div id="tab-content">*/}
                    {/*    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*    <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*    <pre>*/}
                    {/*        <code>{EXAMPLES[selectedTopic].code}</code>*/}
                    {/*    </pre>*/}
                    {/*</div>)}*/}


                    {/*3.*/}

                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
