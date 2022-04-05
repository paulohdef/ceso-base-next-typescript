interface ProgressBarProps {
  width: number
  color: string
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div
      className={`relative flex flex-row w-full text-center text-xs items-center h-1`}
    >
      <div
        style={{ width: `${props.width}%` }}
        className={`top-0 left-0 h-1 w-full ${props.color}`}
      ></div>
    </div>
  )
}

interface ProgressBarWithTextProps {
  width: number
  color: string
}

export const ProgressBarWithText = (props: ProgressBarWithTextProps) => {
  return (
    <div
      className={`relative flex flex-row w-full text-center text-xs items-center h-5`}
    >
      <div
        style={{ width: `${props.width}%` }}
        className={`absolute top-0 w-full ${props.color} text-white`}
      >
        {props.width}%
      </div>
    </div>
  )
}
