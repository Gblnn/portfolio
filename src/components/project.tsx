import { Link } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

interface Props {
  title: string;
  desc?: string;
  img: string | string[];
  link?: string;
  github?: string;
  imageHeight?: string;
}

export default function Project(props: Props) {
  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ border: "1px solid rgba(150 150 150/ 40%)" }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ padding: "1rem" }}>
          {Array.isArray(props.img) ? (
            <ImageCarousel images={props.img} height={props.imageHeight} />
          ) : (
            <a href={props.link} target="_blank">
              <motion.img
                style={{
                  width: "100%",
                  height: props.imageHeight || "auto",
                  objectFit: "cover",
                  borderRadius: "0.4rem",
                  display: "block",
                }}
                src={props.img}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </a>
          )}
        </div>

        <div style={{ padding: "0 1.2rem 1.2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "0.5rem",
            }}
          >
            <a
              className="project-link"
              style={{ textDecoration: "none" }}
              href={props.link}
              target="_blank"
            >
              <h3>{props.title}</h3>
            </a>
            <Link width="1rem" />
          </div>

          <motion.p
            style={{
              fontSize: "0.8rem",
              lineHeight: "1.5",
              color: "var(--color-text)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {props.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
