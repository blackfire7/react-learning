import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import {useState} from "react";
import QUESTIONS from "../questions.js";

export default function Question({index, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer, set] = useState({selectedAnswer: '', isCorrect: null});

    function handleSelectAnswer(answer) {
        setAnswer({
            selected: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selected: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        console.log('---------')
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        console.log('====')
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer}/>
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
