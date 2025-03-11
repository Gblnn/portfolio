import Hero from "@/components/hero";
import Nav, { ActiveSectionContext } from "@/components/nav";
import Project from "@/components/project";
import { Mail } from "lucide-react";
import { useContext } from "react";

export default function Home() {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <>
      <div className="container" style={{}}>
        <div className="scroll-watcher"></div>
        <div style={{ width: "100%", height: "100%" }}>
          <Nav />
          <div className="mobile-nav">
            {["About", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-item ${
                  activeSection === item.toLowerCase() ? "nav-item-active" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div id="about" className="page">
            <Hero />
          </div>

          <div
            id="work"
            className="page"
            style={{ border: "", width: "100%", height: "fit-content" }}
          >
            <div style={{ height: "4rem" }}></div>

            <div
              className="page-container"
              style={{ width: "100%", height: "100%" }}
            >
              <div style={{ marginTop: "3.5rem", marginBottom: "2.5rem" }}>
                <h2 style={{ textAlign: "center" }}>💼 Projects</h2>
              </div>
            </div>

            <div className="project-container" style={{ marginTop: "1rem" }}>
              <Project
                img="/ssu-page.png"
                title="Sohar Star United LLC"
                link="https://soharstar.com"
                desc="A clean & feature rich landing page focussed on lead generation "
              />

              <Project
                img="/wo-page.png"
                title="Wahat Oman"
                link="https://wahatoman.co"
                desc="A minimal & simple landing page focussed on brand awareness"
              />

              <Project
                img="/coffee.png"
                title="Coffee"
                link="https://coffee-dark.netlify.app"
                desc="A minimalistic social media app to practice Firebase CRUD"
              />

              {/* <Project
                img="/university-page.png"
                title="Landing Page"
                link="https://hw-page.netlify.app"
                desc="A design recreation of HW university landing page written in React and TypeScript"
              /> */}

              <Project
                img="/dashboard.png"
                title="Dashboard"
                link="https://dashboard-nine.netlify.app"
                desc="A clean dashboard design to practice responsive design"
              />

              {/* <Project
                img="/blaze-page.png"
                title="Blaze"
                desc="An online store design integrated with Firebase firestore and authentication"
              /> */}
            </div>

            {/* New Extras Section */}
            <div
              className="page-container"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                style={{
                  marginTop: "5rem",
                  marginBottom: "2.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <h2 style={{ textAlign: "center" }}>🎨 Extras</h2>
                <p style={{ opacity: "0.75" }}>3D Visualizations</p>
              </div>
            </div>

            <div className="project-container" style={{ marginTop: "1rem" }}>
              <Project
                img={["/renders/interior-1.png", "/renders/interior-2.png"]}
                title="Interior Design"
                desc="Minimalist interior design with focus on lighting and materials"
                imageHeight="250px"
              />

              <Project
                img={["/renders/sofa.png"]}
                title="Product Visualization"
                desc="Product rendering showcasing materials and environmental lighting"
                imageHeight="250px"
              />

              <Project
                img={[
                  "/renders/office-1.png",

                  "/renders/office-3.png",
                  "/renders/office-4.png",
                ]}
                title="Office Space"
                desc="Interior design layout of an office space"
                imageHeight="250px"
              />

              {/* <Project
                img={[
                  "/renders/mak-1.png",

                  "/renders/mak-3.png",
                  "/renders/mak-4.png",
                ]}
                title="Architectural Visualization"
                desc="Exterior architectural visualization with emphasis on photorealism"
                imageHeight="250px"
              /> */}

              <Project
                img={["/renders/garage-1.png", "/renders/attic-2.png"]}
                title="Structural Design"
                desc="Structural design of a Automobile workshop"
                imageHeight="250px"
              />

              <Project
                img={["/renders/attic-1.png", "/renders/attic-3.png"]}
                title="Concept Strutural Design"
                desc="Structural design of a Concept Workshop"
                imageHeight="250px"
              />

              <Project
                img={["/renders/cafe-1.png", "/renders/cafe-2.png"]}
                title="Stylized Interior"
                desc="Stylized interior design of a cafe"
                imageHeight="250px"
              />
            </div>
          </div>

          <div className="page">
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <h1 id="contact">Get in touch</h1>

              <p className="desc" style={{ textAlign: "center" }}>
                Whether you are starting a project, have inquiries or just want
                to say hi, my inbox is always open. Feel free to reach out and I
                will get back to you as soon as possible
              </p>

              {/* <div style={{ display: "flex", gap: "1.5rem" }}>
                <a href="https://github.com/Gblnn" target="_blank">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/gokulnathiel" target="_blank">
                  <Linkedin />
                </a>
              </div> */}

              <button className="red btn">
                <a
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  href="mailto:Gokul.nathiel2305@gmail.com"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <Mail width={"1rem"} />
                  Reach out
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
