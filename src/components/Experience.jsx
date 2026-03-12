import { motion } from "framer-motion";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="title">Experiência</h2>
        <div className="experience__list">
          {experience.map((e, idx) => (
            <motion.article
              key={`${e.company}-${e.role}-${idx}`}
              className="experience__item card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <h3 className="experience__role">
                {e.role} <span className="muted"> — {e.company}</span>
              </h3>
              <div className="experience__meta muted">{e.period} • {e.tech}</div>
              <div className="experience__desc">{e.description}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
