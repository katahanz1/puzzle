import React from 'react';
import '../styles/part.css';

interface PartProps {
  id: string;
  top: number;
  left: number;
  style: React.CSSProperties;
}

const Part: React.FC<PartProps> = ({ id, top, left, style }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      id={id}
      className='cuadro'
      style={style}
      draggable
      onDragStart={handleDragStart}
    >
      <img
        className='imagen'
        src='https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_640.jpg'
        alt='part of the image'
        style={{ top: `-${top}px`, left: `-${left}px` }}
      />
    </div>
  );
};

export default Part;
