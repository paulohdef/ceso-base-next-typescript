const items = [
  {
    index: 1,
    title: 'Auxílio financeiro.',
    sentence: 'Solicitação de auxílio por aplicativo.',
    description: 'Associado fez solicitaçao online.',
    number: 6,
    img: '/images/faces/w1.png',
    timeago: 'Alguns dias atrás',
  },
  {
    index: 2,
    title: 'Compra na loja FardaCeso.',
    sentence: 'Representação de Belem.',
    description:
      'Illo voluptate distinctio hic vitae molestiae culpa ipsam eveniet doloremque.',
    number: 8,
    img: '/images/faces/m8.png',
    timeago: 'Mais de 30 dias',
  },
  {
    index: 3,
    title: 'Atualialização cadastral.',
    sentence: 'Atualização cadastral por aplicativo.',
    description: 'Explicabo est qui illum et quo occaecati beatae hic eos.',
    number: 5,
    img: '/images/faces/m8.png',
    timeago: 'Mais de 2 meses',
  },
  {
    index: 4,
    title: 'Upgrade de informações no sistema.',
    sentence: 'Dolore nam laudantium vel voluptatem.',
    description:
      'Ab eius exercitationem molestiae architecto voluptatem possimus quos mollitia omnis.',
    number: 2,
    img: '/images/faces/w9.png',
    timeago: '3 meses atrás',
  },
]

export const Timeline1 = () => {
  return (
    <div className="flex flex-col w-full">
      {items.map((item, i) => (
        <div className="flex relative justify-start items-start" key={i}>
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">
            {item.index}
          </div>
          <div className="flex-grow flex items-start flex-col pb-4">
            <div className="flex items-start justify-start px-4">
              <div className="flex flex-col w-full">
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-sm">{item.sentence}</div>
                <div className="text-sm">{item.timeago}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
