import React, { useState } from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import '/resources/css/app.css';
import MovingObject from './MovingObject';

const coordinate = [
  {x:310, y:230},{x:1100, y:230},{x:710,y:440}
  ]

const Whiteboard = (props) => {
  const { posts } = props;

  const getRandomPosition = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const [objects, setObjects] = useState(() =>
    Array.from({ length: 15 }, (_, index) => ({
      id: index + 1,
      x: index < 7 ? coordinate[0].x : index === 14 ? coordinate[2].x: coordinate[1].x, 
      y: index < 7 ? coordinate[0].y + index * 60 : index === 14 ? coordinate[2].y: coordinate[1].y + (index - 7 ) * 60, 
      color: index < 7 ? 'blue' : index === 14 ? 'black' : 'pink',
    }))
  );

  const [selectedObjectId, setSelectedObjectId] = useState(null);

  const handleObjectClick = (id) => {
    setSelectedObjectId(id);
  };

  const handleMouseMove = (e) => {
    if (selectedObjectId !== null) {
      setObjects((prevObjects) =>
        prevObjects.map((obj) =>
          obj.id === selectedObjectId
            ? { ...obj, x: e.clientX, y: e.clientY }
            : obj
        )
      );
    }
  };

  return (
    <Authenticated
      class="flex flex-col flex items-center flex flex-col"
      auth={props.auth}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Whiteboard
        </h2>
      }
    >
      <div className="court"></div>

      <div
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        onMouseMove={handleMouseMove}
      >
        {objects.map((obj) => (
          <MovingObject
            key={obj.id}
            x={obj.x}
            y={obj.y}
            isSelected={selectedObjectId === obj.id}
            color={obj.color}
            onClick={() => handleObjectClick(obj.id)}
          />
        ))}
      </div>
      
      <div class="flex flex-col flex items-center">
        <Link href="/home" className="custom-button text-xl mb-4"> Home </Link>
      </div>
      
    </Authenticated>
  );
};

export default Whiteboard;


