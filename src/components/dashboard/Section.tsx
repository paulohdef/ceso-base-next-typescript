interface SectionProps {
  title: string
  description: any
  right: any
  children: any
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex flex-col">
          <div className="text-sm font-light text-gray-500">{props.title}</div>
          <div className="text-sm font-bold">{props.description}</div>
        </div>
        {props.right ?? null}
      </div>
      {props.children}
    </div>
  )
}

export default Section
