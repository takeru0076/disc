import React, { useState } from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import '/resources/css/app.css';
import MovingObject from './MovingObject';

const Whiteboard = (props) => {
  const { posts } = props;

  const getRandomPosition = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const [objects, setObjects] = useState(() =>
    Array.from({ length: 14 }, (_, index) => ({
      id: index + 1,
      x: getRandomPosition(0, window.innerWidth - 30),
      y: getRandomPosition(0, window.innerHeight - 30),
      color: index < 7 ? 'blue' : index === 13 ? 'black' : 'pink',
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
      <div className="ultimate-court"></div>

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

      <Link
        href="/home/"
        class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4"
      >
        Home
      </Link>
    </Authenticated>
  );
};

export default Whiteboard;


