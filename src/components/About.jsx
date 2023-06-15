import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] width-w-3xl leading-[30px]">
      I'm really into writing web-applications. I love to use JavaScript with Vue.JS, Quasar or React in my projects. I also have experience in writing vanilla HTML/CSS (the latter, for instance, includes working with flexbox and grid). I am familiar with RestAPI and have experience in creating databases on PostgreSQL and utilizing Sequelize ORM, had a chance to try out and test Firebase Cloud Storage for my Quasagram project. I am a fast learner and really looking forward to sky-rocket my learning path with hard work and persistence.
      </motion.p>
    </>
  )
}

export default About