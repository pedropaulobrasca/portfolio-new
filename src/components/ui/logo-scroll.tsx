import Image from 'next/image'

import NextjsIcon from '@/assets/nextjs-logo.svg'
import NodejsIcon from '@/assets/nodejs-logo.svg'
import ReactIcon from '@/assets/react-logo.svg'
import TypeScriptIcon from '@/assets/typescript-logo.svg'

const logos = [
  {
    id: 1,
    name: 'Nextjs',
    svg: NextjsIcon,
  },
  {
    id: 2,
    name: 'React',
    svg: ReactIcon,
  },
  {
    id: 3,
    name: 'Nodejs',
    svg: NodejsIcon,
  },
  {
    id: 4,
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
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo.svg}
                      alt={logo.name}
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
