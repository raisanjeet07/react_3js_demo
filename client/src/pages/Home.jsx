import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state);
  return (
      <AnimatePresence>
          {snap.intro && (
              <motion.section className="home" {...slideAnimation('left')}>
                  
                  <motion.header {...slideAnimation('down')}>
                      <img
                          src='./threejs.png'
                          alt="logo"
                          className='w-8 h-8 object-contain'
                      />
                  </motion.header>
                  
                  <motion.div className="home-conatin" {...headContentAnimation}>
                      <motion.div {...headTextAnimation}>
                          <h1 className='head-text'>
                              LET's <br className='x1:block hidden'/> Do IT.
                          </h1>
                      </motion.div>
                  </motion.div>

                  <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                      <p className='max-w-md font-normal text-gray-600 text-base'>
                          Create your unique and exclusive shirt with our brancd new 3D customizer tool.
                          <strong>Unleash your imagenation</strong> { " "} and define yuor own style.
                      </p>
                      <CustomButton
                          type="filled"
                          title="Customize It"
                          handleClick={() => state.intro = false}
                          customStyle="w-fit px-4 py-2.5 font-bold text-5m"
                      />
                  </motion.div>
              </motion.section>
          )}
    </AnimatePresence>
  )
}

export default Home