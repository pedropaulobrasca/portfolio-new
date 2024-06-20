export function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-emerald-200">
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-emerald-500"></div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-md font-medium text-emerald-900">Tinnova</div>
          <div className="inline-block rounded-full border border-emerald-500 px-1 py-0 text-xs uppercase text-emerald-500">
            atual
          </div>
        </div>
        <div className="text-sm font-normal text-gray-500">
          Desenvolvedor Full-stack
        </div>
        <div className="text-xs text-gray-400">
          jun de 2022 - o momento · 2 anos 1 mês
        </div>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-gray-200"></div>
        <div className="text-md font-medium text-gray-900">B2ML Sistemas</div>
        <div className="text-sm font-normal text-gray-500">
          Analista de sistema
        </div>
        <div className="text-xs text-gray-400">
          mar de 2021 - jun de 2022 · 1 ano 4 meses
        </div>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-gray-200"></div>
        <div className="text-md font-medium text-gray-900">
          Thompson Management Horizons
        </div>
        <div className="text-sm font-normal text-gray-500">
          Desenvolvedor da web
        </div>
        <div className="text-xs text-gray-400">
          fev de 2020 - mar de 2021 · 1 ano 2 meses
        </div>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-gray-200"></div>
        <div className="text-md font-medium text-gray-900">Virtua Brasil</div>
        <div className="text-sm font-normal text-gray-500">
          Desenvolvedor da web
        </div>
        <div className="text-xs text-gray-400">
          dez de 2019 - fev de 2020 · 3 meses
        </div>
      </li>
    </ol>
  )
}
