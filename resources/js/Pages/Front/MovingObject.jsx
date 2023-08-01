import React, { useState, useRef } from 'react';

const MovingObject = ({ x, y, isSelected, color, onClick }) => {
  const [position, setPosition] = useState({ x, y });
  const prevMousePositionRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    onClick();
    isDraggingRef.current = true;
    prevMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - prevMousePositionRef.current.x;
      const deltaY = e.clientY - prevMousePositionRef.current.y;
      setPosition((prevPos) => ({
        x: prevPos.x + deltaX,
        y: prevPos.y + deltaY,
      }));
      prevMousePositionRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    onClick(); // ドラッグ終了時に選択解除
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: color,
        cursor: isSelected ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></div>
  );
};

export default MovingObject;
