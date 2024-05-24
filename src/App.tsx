import './App.css';
import Part from './components/part';
import Board from './components/board';

interface Size {
  top: number;
  left: number;
}

function App() {
  const medidas: Size[] = [
    {top: 0, left: 0},
    {top: 0, left: 150},
    {top: 0, left: 300},
    {top: 0, left: 450},
    {top: 150, left: 0},
    {top: 150, left: 150},
    {top: 150, left: 300},
    {top: 150, left: 450},
    {top: 300, left: 0},
    {top: 300, left: 150},
    {top: 300, left: 300},
    {top: 300, left: 450},
    {top: 450, left: 0},
    {top: 450, left: 150},
    {top: 450, left: 300},
    {top: 450, left: 450},
  ];

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 450);
    const left = Math.floor(Math.random() * 450);
    return { top, left };
  };

  return (
    <div className='main-container'>
      <Board />
      <div className='pieces-container'>
        {medidas.map((medida, index) => {
          const randomPosition = getRandomPosition();
          return (
            <Part
              key={index}
              id={`part-${index}`}
              top={medida.top}
              left={medida.left}
              style={{top: `${randomPosition.top}px`, left: `${randomPosition.left}px` }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
