import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { projects, getGithubUrl } from "../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="title">Projetos</h2>
        <div className="projects__grid">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="project"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <h3 className="project__title">{p.title}</h3>
              <div className="project__stack">{p.stack}</div>
              <div className="project__desc">{p.description}</div>
              <div className="project__actions">
                {(() => {
                  const githubUrl = getGithubUrl(p.githubRepo || p.github);
                  if (githubUrl) {
                    return (
                      <a
                        className="btn btn--ghost"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir código no GitHub: ${p.title}`}
                      >
                        <FaGithub /> Código
                      </a>
                    );
                  }
                  if (p.isPrivateCode) {
                    return (
                      <span
                        className="badge badge--private"
                        aria-label="Código restrito sob NDA"
                      >
                        <FaLock /> Código restrito (NDA)
                      </span>
                    );
                  }
                  return null;
                })()}
                {p.link && p.link !== "#" && (
                  <a
                    className="btn btn--primary"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir versão ao vivo do projeto: ${p.title}`}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
