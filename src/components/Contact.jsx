import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const links = [
  { href: "mailto:arthurfdias96@gmail.com", icon: FaEnvelope, label: "Email" },
  {
    href: "https://www.linkedin.com/in/arthurfeerdias/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/ArthurDias96", icon: FaGithub, label: "GitHub" },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="title">Contato</h2>
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact__text">
            Estou sempre aberto a conversar sobre projetos, oportunidades ou
            simplesmente trocar uma ideia sobre desenvolvimento. Entre em
            contato através das redes abaixo!
          </p>
          <div className="contact__icons">
            {links.map(({ href, icon: Icon, label }, idx) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label={label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
