import React, {useState} from 'react';
import './App.css';
import {CardBox} from '../CardBox/CardBox';
import {CardInstanceState} from '../CardBox/instance/CardBoxInstance';
import {TestScreen} from '../TestScreen/TestScreen';

const cards = [ './card-0.jpg',
               './card-1.jpg',
               './card-2.jpg',
               './card-3.jpg',
               './card-4.jpg',
               './card-5.jpg',
               './card-6.jpg',
               './card-7.jpg',
               './card-8.jpg',
               './card-9.jpg',
               './card-10.jpg', 
               './card-11.jpg',
               './card-12.jpg',
               './card-13.jpg',
               './card-14.jpg',
               './card-15.jpg',
               './card-16.jpg',
               './card-17.jpg',
               './card-18.jpg',
               './card-19.jpg',
               './card-20.jpg',
               './card-21.jpg', 
               './card-22.jpg',
               './card-23.jpg',
               './card-24.jpg',
               './card-25.jpg',
               './card-26.jpg',
               './card-27.jpg',
               './card-28.jpg',
               './card-29.jpg',
        

              ];

function App() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);
  const [num] = useState(Math.floor(cards.length * Math.random()));
  const cover = cards[num];

  const onStateChange = (state: CardInstanceState) => {
    let consoleText = 'Нет такого стейта';
    switch (state) {
      case 0: {
        consoleText = 'Ничего не начато, ничего не загружено';
        break;
      }
      case 1: {
        consoleText = 'Все загружено, стартует анимация';
        break;
      }
      case 2: {
        consoleText = 'Стартовая анимация закончилась, ждем отрыва(туц-туц-туц)';
        break;
      }
      case 3: {
        consoleText = 'Отрыв произошел';
        break;
      }
      case 4: {
        consoleText = 'Анимация окончания началась, можно показывать 2D';
        setActive(true);
        break;
      }
      case 5: {
        consoleText = 'Анимация окончания закончилась, можно вырубать';
        setVisible(false);
        break;
      }
    }
    console.log(consoleText);
  }

  return (
    <div className="App">
      {visible && <CardBox cover={cover} onStateChange={onStateChange}/>}
      <TestScreen active={active} num={num}/>
    </div>
  );
}

export default App;
