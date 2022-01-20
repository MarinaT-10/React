import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index.module.css';

const FilmList = ({ films, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      {films.map((film) => {
        return (
          <div>
            <h3>Title: {film.title}</h3>
            <h3>Year: {film.year}</h3>
          </div>
        )
      })}
    </div>
  )
}

const ProfessionList = ({ professions, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      {professions.map((profession) => {
        return (
          <div>
            <h2>Profession: {profession}</h2> {/*немного не поняла, как вывести эти профессии через запятую */}
          </div>
        )
      })}
    </div>
  )
}

//Классовый компонент
class ClassComponent extends React.Component {
  render() {
    // Принимаем пропсы в классовом компоненте 
    console.log("this", this.props);
    //Делаем деструктуризацию 
    const { name, surname, age, professions, films, handlerClick } = this.props;

    return (
      <div className={styles.classcomp}>
        <h2 className={styles.testRed}>Hello, Class Component!</h2>
        {/* Отображаем пропсы в классе*/}
        <p>ФИ: {name} {surname}</p>
        <p>Age: {age}</p>
        <FilmList films={films} title="Films from class" />
        <ProfessionList professions={professions} title="Список профессий 1" />
        <button className={styles.btn} onClick={handlerClick}> Вывести в консоль</button>
      </div>
    );
  }
}

//Функциональный компонент
//В функции пропсы приходят в аргументе: function FunctionComponent(props);
//Делаем деструктуризацию. Для этого (props) меняем на ({name, surname, age})
function FunctionComponent({ name, surname, age, professions, films, handlerClick }) {
  //Принимаем пропсы в функции 
  // console.log("props", props);
  return (
    <div className={styles.funccomp}>
      <h2 className={styles.testGreen}>Hello, Function Component!</h2>
      {/* Отображаем пропсы в функции */}
      <p>ФИ: {name} {surname}</p>
      <p>Age: {age}</p>
      <FilmList films={films} title="Films from function" />
      <ProfessionList professions={professions} title="Список профессий 2" />
      <button className={styles.btn} onClick={handlerClick}> Вывести в консоль</button>
    </div>
  );
}

const Parent = () => {
  const name = "Иван";
  const surname = "Иванов"
  const age = 23;
  const professions = ["admin", "operator"];
  const films = [
    { title: "film1", year: 2020 },
    { title: "film2", year: 2021 }
  ];
  const handlerClick = () => {
    console.log('click');
  };
  return (
    <div className={styles.parent}>
      <h1>Родительский компонент</h1>

      {/* Передаем пропсы в дочерние компоненты */}
      <ClassComponent name={name} surname={surname} age={age} professions={professions} films={films} handlerClick={handlerClick} />
      <hr />
      <FunctionComponent name={name} surname={surname} age={age} professions={professions} films={films} handlerClick={handlerClick} />
    </div>
  );
}

// ДОМАШНЕЕ ЗАДАНИЕ ПО МЕТОДИЧКЕ 

const Message = ({ text, title }) => {
  return (
    <div className={styles.message}>
      <h1>Передача текста из компонента App в компонент Message</h1>
      <h2>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

const App = () => {
  const title = "Д/з по методичке"
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi tempore ipsam officiis in nisi voluptate ratione distinctio architecto blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi tempore ipsam officiis in nisi voluptate ratione distinctio architecto blanditiis.";

  return (
    <div >
      {/* Передаем пропсы в дочерние компоненты */}
      <Message title={title} text={text} />
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Parent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

