'use client'

import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { About } from '@/components/pages/about'
import { Contact } from '@/components/pages/contact'
import ButtonShapeTabs from '@/components/ui/button-shape-tabs'
import { TextFlip } from '@/components/ui/text-flip'

export default function Home() {
  const controls = useAnimationControls()

  const tabs = ['Sobre', 'Projetos', 'Contato']
  const [selected, setSelected] = useState<string>(tabs[0])

  const handleTabChange = (tab: string) => {
    setSelected(tab)
  }

  useEffect(() => {
    controls.start({
      y: [300, 0],
      opacity: [0, 1],
      transition: { duration: 0.1, ease: 'circIn' },
    })
  }, [selected, controls])

  return (
    <div className="space-y-4 py-4">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8 text-zinc-800">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <Image
                src="https://github.com/pedropaulobrasca.png"
                alt="Pedro Paulo"
                width={56}
                height={56}
                className="rounded-full"
              />

              <div className="flex flex-col">
                <p className="text-lg font-bold"> Pedro Paulo</p>
                <span className="text-sm font-thin text-gray-500">
                  <TextFlip />
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://x.com/speutz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/pedropaulobrasca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-paulo-brasca-trevisanuto-86136114a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="my-8 w-full border-b" />
          <div>
            <ButtonShapeTabs tabs={tabs} onTabChange={handleTabChange}>
              <motion.div
                id="motion-container"
                className="h-full w-full"
                animate={controls}
              >
                {selected === 'Sobre' && <About />}
                {selected === 'Projetos' && 'Em breve...'}
                {selected === 'Contato' && <Contact />}
              </motion.div>
            </ButtonShapeTabs>
          </div>
        </div>
      </main>
    </div>
  )
}
