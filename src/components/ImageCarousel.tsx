import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  images: string[];
  height?: string;
}

export default function ImageCarousel({ images, height = "250px" }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        backgroundColor: "black",
        borderRadius: "0.4rem",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.4rem",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 0.5rem",
          zIndex: 2,
        }}
      >
        <motion.button
          onClick={handlePrevious}
          className="carousel-button"
          aria-label="Previous image"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, x: -3 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft size={28} strokeWidth={3} color="white" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="carousel-button"
          aria-label="Next image"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={28} strokeWidth={3} color="white" />
        </motion.button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
