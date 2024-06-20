import { ExperienceTimeline } from '../ui/experience-timeline'
import { LogoScroll } from '../ui/logo-scroll'

export function About() {
  return (
    <div className="relative flex h-full flex-col gap-12">
      <p className="text-gray-500">
        Aqui vai algum texto bem clichê sobre mim, tipo: &quot;Olá, eu sou Pedro
        Paulo, um desenvolvedor apaixonado por tecnologia e inovação.
        Atualmente, trabalho como desenvolvedor front-end e back-end na empresa
        XPTO. Nas horas vagas, gosto de escrever sobre tecnologia e compartilhar
        conhecimento com a comunidade.&quot;
      </p>

      <p className="text-gray-500">Confiem em mim, sou bom no que faço.</p>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Experiencias</h3>

        <ExperienceTimeline />
      </div>

      <LogoScroll />

      <div className="flex w-full justify-center text-center text-sm">
        <div>© 2024 - Pedro Paulo</div>
      </div>
    </div>
  )
}
