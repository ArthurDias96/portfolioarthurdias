import { motion } from "framer-motion";
import profilePhoto from "../assets/ARI_2694.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Arthur Dias
          </motion.h1>
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Front-end Developer focado em experiências digitais claras,
            performáticas e alinhadas ao que o negócio precisa.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a href="#contact" className="btn btn--primary">
              Fale comigo
            </a>
            <a href="#projects" className="btn btn--ghost">
              Ver projetos
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__profile"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="hero__photo-wrapper">
            <img
              src={profilePhoto}
              alt="Foto de Arthur Dias"
              className="hero__photo"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
