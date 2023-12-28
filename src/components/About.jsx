/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#792990]/90 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre</p>
        <h2 className={styles.sectionHeadText}>Quem Somos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Onde a tecnologia encontra a criatividade para impulsionar o seu negócio! Somos uma empresa jovem e inovadora especializada em soluções de tecnologia e marketing digital, comprometida em ajudar empresas a alcançar o sucesso no mundo digital. <br /><br />
        Fundada com a visão de ser uma força transformadora no cenário digital, a WB Digital Solutions é movida pela paixão de criar experiências digitais inovadoras e soluções tecnológicas de ponta. Nossa equipe é composta por profissionais altamente qualificados e dedicados, que compartilham uma paixão por ajudar nossos clientes a superar desafios e alcançar seus objetivos empresariais. <br /><br />

        Valorizamos a integridade, a inovação e a excelência, e estamos sempre buscando novas formas de superar as expectativas dos nossos clientes. Acreditamos no poder da colaboração e da comunicação aberta, trabalhando lado a lado com você para entender suas necessidades e criar soluções que geram resultados reais e duradouros.



      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");