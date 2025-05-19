import Hero from "@/components/hero";
import Nav, { ActiveSectionContext } from "@/components/nav";
import Project from "@/components/project";
import { CodeSquare, Globe, Mail } from "lucide-react";
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
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  gap: "",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 style={{ textAlign: "center" }}>💼What I do</h2>
                <br />
                <br />
                <br />
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Globe color="slateblue" />
                  Landing Pages
                </h2>
                <p
                  style={{
                    fontSize: "0.8rem",
                    textAlign: "center",
                    padding: "0 2rem",
                    marginTop: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  Landing pages improve online brand presence and visibility,
                  helps in lead generation and CTR.
                </p>
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

              {/* <Project
                img="/coffee.png"
                title="Coffee"
                link="https://coffee-dark.netlify.app"
                desc="A minimalistic social media app to practice Firebase CRUD"
              />

              <Project
                img="/dashboard.png"
                title="Dashboard"
                link="https://dashboard-nine.netlify.app"
                desc="A clean dashboard design to practice responsive design"
              /> */}

              {/* <Project
                img="/university-page.png"
                title="Landing Page"
                link="https://hw-page.netlify.app"
                desc="A design recreation of HW university landing page written in React and TypeScript"
              /> */}

              {/* <Project
                img="/blaze-page.png"
                title="Blaze"
                desc="An online store design integrated with Firebase firestore and authentication"
              /> */}
            </div>

            <div className="project-container" style={{ marginTop: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  gap: "",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CodeSquare color="salmon" />
                  PWAs
                </h1>
                <p
                  style={{
                    fontSize: "0.8rem",
                    textAlign: "center",
                    padding: "0 2rem",
                    marginTop: "0.25rem",
                  }}
                >
                  PWAs are installable standalone web apps designed to run on
                  any device natively.
                </p>
              </div>

              <div className="project-container">
                <Project
                  img="pointsale.png"
                  title="PointSale"
                  desc="A cloud-based, full fledged point of sale application with offline support."
                  tag="No Preview"
                />
                <Project
                  img="/timelog.png"
                  title="Time Logger"
                  desc="Designed to log shift start, end times, with location data for scenarios where a fixed biometric device is not feasible."
                  tag="No Preview"
                />
              </div>
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
                  flexFlow: "column",
                  alignItems: "center",
                  gap: "",
                }}
              >
                <h2 style={{ textAlign: "center" }}>🎨 Renders</h2>
                <p
                  style={{
                    fontSize: "0.8rem",
                    textAlign: "center",
                    padding: "0 2rem",
                    marginTop: "0.25rem",
                  }}
                >
                  3D Visualizations & Concepts
                </p>
              </div>
            </div>

            <div className="project-container" style={{ marginTop: "1rem" }}>
              <Project
                img={["/renders/interior-1.png", "/renders/interior-2.png"]}
                title="Interior Design"
                desc="Minimalist interior design with focus on lighting and materials"
                imageHeight="250px"
              />

              {/* <Project
                img={["/renders/sofa.png"]}
                title="Product Visualization"
                desc="Product rendering showcasing materials and environmental lighting"
                imageHeight="250px"
              /> */}

              <Project
                img={["/LLH.png"]}
                title="Parking Lot Visualization"
                desc="3D Visualization of a parking lot civil project"
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

              <Project
                img={[
                  "/renders/mak-1.png",

                  "/renders/mak-3.png",

                  "/renders/view_1.png",
                  "/renders/mak-4.png",
                ]}
                title="Chemical Plant Visualization"
                desc="Exterior architectural visualization of an upcoming project"
                imageHeight="250px"
              />

              <Project
                img={["/renders/garage-1.png", "/renders/attic-2.png"]}
                title="Structural Design"
                desc="Structural design of am Automobile workshop"
                imageHeight="250px"
              />

              {/* <Project
                img={["/renders/attic-1.png", "/renders/attic-3.png"]}
                title="Concept Design"
                desc="Attic workshop design concept with focus on lighting and materials"
                imageHeight="250px"
              /> */}

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
