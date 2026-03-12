import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="title">Projetos</h2>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <p className="project__desc">
            Em breve esta seção vai ganhar uma curadoria dos projetos que melhor
            representam meu trabalho com foco em e-commerce, interfaces reais e
            experimentos pessoais. Estou organizando os cases para você
            conseguir ver o contexto, o resultado e as decisões por trás de cada
            interface.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
