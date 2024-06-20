import Image from 'next/image'

import NextjsIcon from '@/assets/nextjs-logo.svg'
import NodejsIcon from '@/assets/nodejs-logo.svg'
import ReactIcon from '@/assets/react-logo.svg'
import TypeScriptIcon from '@/assets/typescript-logo.svg'

const logos = [
  {
    name: 'Nextjs',
    svg: NextjsIcon,
  },
  {
    name: 'React',
    svg: ReactIcon,
  },
  {
    name: 'Nodejs',
    svg: NodejsIcon,
  },
  {
    name: 'TypeScript',
    svg: TypeScriptIcon,
  },
]

export function LogoScroll() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="group relative mt-6 flex gap-6 overflow-hidden p-2">
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <div key={key} className="flex items-center justify-center">
                    <Image
                      src={logo.svg}
                      alt="Nodejs"
                      className="text-brand dark:text-brand-dark h-18 w-10 fill-current"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
