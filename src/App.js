import React, { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое Рекурсия в Js?',
    variants: ['приложение', 'Функция которая вызывает саму себя', 'я глупый и не знаю такой простой вещи'],
    correct: 3,
  },
  {
    title: 'Сколько типов данных есть в Js??',
    variants: ['2', '6', '8', '9'],
    correct: 4,
  },
  {
    title: 'useState hook что это?',
    variants: ['принимает на вход начальное состояние и возвращает массив из двух значений', 'Хук который принимает в себя 2 состояния', 'Я не знаю',],
    correct: 5,
  },
  {
    title: 'Какой тип данных возвращает useState?',
    variants: ['useState возвращает массив с двумя элементами', 'вы говорите React сделать что-то после рендера', 'Я не знаю',],
    correct: 6,
  },
  
];

function Result( {correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onclickVariant }) {
  const percentage = Math.round((step / questions.length * 100));
  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {
            question.variants.map((Text, index) => (
              <li onClick={() => onclickVariant(index)} key={Text}>{Text}</li>
            ))
          }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onclickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1)


    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? (
        <Game step={step} question={question} onclickVariant={onclickVariant}  />
        ) : ( <Result correct={correct} />
      )}  
    </div>
  );
}

export default App;