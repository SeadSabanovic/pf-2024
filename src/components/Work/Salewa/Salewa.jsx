import React, { useEffect, useRef } from "react";
import "./_salewa.scss";

export default function Salewa() {
  const salewaRef = useRef(null);

  useEffect(() => {
    const NUMBER_OF_SNOWFLAKES = 40;
    const MAX_SNOWFLAKE_SIZE = 2;
    const MAX_SNOWFLAKE_SPEED = 0.5;
    const SNOWFLAKE_COLOUR = "#777";
    const snowflakes = [];

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const salewaEl = salewaRef.current;

    const updateCanvasSize = () => {
      canvas.width = salewaEl.offsetWidth;
      canvas.height = salewaEl.offsetHeight;
    };

    salewaEl.appendChild(canvas);
    updateCanvasSize();

    const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
      color: SNOWFLAKE_COLOUR,
      speed: Math.random() * MAX_SNOWFLAKE_SPEED + 0.5,
      sway: Math.random() - 0.5,
    });

    const drawSnowflake = (snowflake) => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fillStyle = snowflake.color;
      ctx.fill();
      ctx.closePath();
    };

    const updateSnowflake = (snowflake) => {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.sway;
      if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
        snowflake.y = 0;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((snowflake) => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
      });

      requestAnimationFrame(animate);
    };

    for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
      snowflakes.push(createSnowflake());
    }

    window.addEventListener("resize", updateCanvasSize);

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      salewaEl.removeChild(canvas);
    };
  }, []);

  return <div className="salewa" ref={salewaRef}></div>;
}
