import { motion } from "framer-motion";
import { useEffect, useState, createContext, useContext } from "react";

// Create a context to share the active section
export const ActiveSectionContext = createContext<{
  activeSection: string;
  setActiveSection: (section: string) => void;
}>({
  activeSection: "about",
  setActiveSection: () => {},
});

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
        threshold: 0,
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("#about, #work, #contact");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default function Nav() {
  const { activeSection } = useContext(ActiveSectionContext);
  const navItems = ["About", "Work", "Contact"];

  return (
    <motion.div
      className="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="desktop-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`nav-link ${
              activeSection === item.toLowerCase() ? "nav-link-active" : ""
            }`}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      <motion.button
        style={{ marginRight: "2rem", marginLeft: "2rem" }}
        className="blue btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          style={{ color: "white" }}
          href="https://drive.google.com/file/d/1thWn_BxtRu75wZ1On0oM35iN_oKGsPEy/view?usp=sharing"
          target="_blank"
        >
          📄 Resume
        </a>
      </motion.button>
    </motion.div>
  );
}
