import React from 'react';
import '../styles/board.css';

const Board: React.FC = () => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const pieceId = event.dataTransfer.getData('text/plain');
    const piece = document.getElementById(pieceId);
    if (piece) {
      const cell = event.currentTarget;

      // Ajusta el tamaño y la posición de la pieza
      piece.style.position = 'absolute';
      piece.style.top = '0';
      piece.style.left = '0';
      piece.style.width = '100%';
      piece.style.height = '100%';
      

      const img = piece.querySelector('img');
      if (img) {
        img.style.width = '450%';
        img.style.height = '450%';
      }

      cell.appendChild(piece);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const cells = Array.from({ length: 16 }, (_, index) => (
    <div key={index} className='cell' onDrop={handleDrop} onDragOver={handleDragOver}></div>
  ));

  return <div className='contenedor'>{cells}</div>;
};

export default Board;
