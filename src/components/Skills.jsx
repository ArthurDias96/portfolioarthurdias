import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaCode
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiSass, 
  SiVtex,
  SiJavascript
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "JavaScript (ES6+)", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Sass (SCSS)", icon: SiSass },
  { name: "Node.js", icon: FaNodeJs },
  { name: "APIs REST", icon: TbApi },
  { name: "VTEX", icon: SiVtex },
  { name: "Deco", icon: FaCode },
  { name: "Wake", icon: FaCode },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="title">Stacks</h2>
        <p className="muted" style={{ maxWidth: 640, marginBottom: 20 }}>
          No dia a dia, trabalho principalmente com{" "}
          <strong>HTML5, CSS3, Sass, Tailwind, JavaScript, TypeScript</strong>{" "}
          e frameworks como <strong>React</strong> e <strong>Vue</strong>,
          sempre muito próximo de plataformas de e-commerce como{" "}
          <strong>VTEX IO, VTEX CMS, Wake e Deco</strong>. Também tenho base em{" "}
          <strong>Node.js, Python, PHP</strong> e consumo de{" "}
          <strong>APIs REST/GraphQL</strong> para integrar o front com o que
          acontece do lado do servidor.
        </p>
        <div className="skills__grid">
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={name}
              className="skill"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <Icon className="skill__icon" />
              <span className="skill__name">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
