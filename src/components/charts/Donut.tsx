import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

interface DonutProps {
  active: boolean
  payload: any
  label: string
}

const CustomTooltip = (props: DonutProps) => {
  if (props.active) {
    return (
      <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div>
          <span className="font-bold">{props.payload[0].name}:</span>{' '}
          <span className="font-normal">{props.payload[0].value}</span>
        </div>
      </div>
    )
  }
  return null
}

export const Donut = () => {
  const data = [
    { name: 'Aux Financeiro', value: 400 },
    { name: 'Aux Funeral', value: 300 },
    { name: 'Aux Juridico', value: 200 },
  ]
  let colors = ['#bfdbfe', '#60a5fa', '#2563eb']

  return (
    <div style={{ width: '100%', height: 240 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={60} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Donut
