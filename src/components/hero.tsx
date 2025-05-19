import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {/* <img
        src="/Untitled.png"
        style={{
          width: "5rem",
          height: "4.9rem",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      /> */}
      <motion.div
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--clr-slate600)",
          }}
        >
          👋Hi, I'm
        </p>
      </motion.div>

      <motion.h1
        className="heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        GOKUL NATH
      </motion.h1>

      <div
        style={{
          width: "35ch",
          height: "35ch",
          background: "var(--nav-color)",
          position: "absolute",
          zIndex: "-1",
          backdropFilter: "blur(35px)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          width: "20ch",
          height: "20ch",
          background: "rgba(79 70 229/75%)",
          position: "absolute",
          zIndex: "-2",
          borderRadius: "50%",
        }}
      />

      <motion.p
        style={{ textAlign: "center", width: "90%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        A <strong>Front-end</strong>web developer, a <strong>UI/UX</strong>
        designer and a <strong>3D Artist</strong>until A.I takes over.
      </motion.p>
    </motion.div>
  );
}
