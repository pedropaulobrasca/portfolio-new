'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useInterval } from 'react-use'

const text = ['Desenvolvedor 👨‍💻', 'Bom marido 🙋‍♂️', 'Pai de pet 🐈']

export function TextFlip() {
  const [index, setIndex] = useState(0)

  useInterval(() => {
    setIndex((state) => (state >= text.length - 1 ? 0 : state + 1))
  }, 2000)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="cursor-pointer text-sm font-medium tracking-tight text-gray-500"
        key={index}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text[index]}
      </motion.div>
    </AnimatePresence>
  )
}
