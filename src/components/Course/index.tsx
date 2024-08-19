import router from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
interface CourseProps {
  urlParams: string;
}
const Course = ({ urlParams }: CourseProps) => {
  const [lightPosition, setLightPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const scaleFactor = 1.05;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const overlaySize = 100; // Half the overlay size for centering
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const adjustedX = (event.clientX - left) / scaleFactor;
    const adjustedY = (event.clientY - top) / scaleFactor;

    setLightPosition({
      x: adjustedX - overlaySize,
      y: adjustedY - overlaySize,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setLightPosition((prevPosition) => ({ ...prevPosition, visible: false }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default;
          ReactPixel.track("ViewContent", {
            content_name: "Curso",
            value: 17.0,
            currency: "BRL",
          });
        })
        .catch((err) =>
          console.error("Failed to load React Facebook Pixel", err)
        );
    }

    if (urlParams.includes("instagram")) {
      router.push("/instagram/organico/curso");
    } else if (urlParams.includes("instagram-ads")) {
      router.push("/instagram/ads/curso");
    } else if (urlParams.includes("tiktok")) {
      router.push("/tiktok/organico/curso");
    } else if (urlParams.includes("tiktok-ads")) {
      router.push("/tiktok/ads/curso");
    } else if (urlParams.includes("facebook-organico")) {
      router.push("/facebook/organico/curso");
    } else if (urlParams.includes("facebook-ads")) {
      router.push("/facebook/ads/curso");
    } else {
      router.push("/curso");
    }
  };

  return (
    <>
      <section
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className={styles.lightEffect}
          style={{
            background: `radial-gradient(circle closest-side, rgba(255, 255, 255, 0.3), transparent)`,
            transform: `translate(${lightPosition.x}px, ${lightPosition.y}px)`,
            opacity: lightPosition.visible ? 1 : 0,
          }}
        />
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/newicon.png" />
          </div>
          <div className={styles.text}>
            <h2>Aprenda por R$17,00</h2>
            <h5>
              Nesse curso você vai aprender tudo que você precisa para sair do
              zero, e aprender programação.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
