import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="title">Sobre mim</h2>
        <motion.div
          className="card about__card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Olá, meu nome é <strong>Arthur Dias</strong> e sou desenvolvedor
            front-end. Construo interfaces que conectam estratégia de negócio,
            experiência real do usuário e um código bem estruturado. Já atuei em
            projetos de e-commerce, lidando com demandas do dia a dia que vão
            muito além de deixar a tela bonita: é sobre conversão, clareza e
            resultado.
          </p>
          <p>
            Minha jornada é feita de constância, não de atalhos. Erros, ajustes,
            café frio e uma boa teimosia em sempre entender o porquê das coisas
            fazem parte do meu processo. Gosto de respeitar o que já existe,
            melhorar o que precisa evoluir e propor soluções com visão de
            futuro, mas com os pés no chão.
          </p>
          <p>
            Mais do que escrever código, estou lapidando minha versão
            profissional todos os dias. Busco crescer com responsabilidade,
            clareza e excelência, porque cada linha bem feita carrega um pedaço
            da história que estou construindo com calma, consistência e
            intenção.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
