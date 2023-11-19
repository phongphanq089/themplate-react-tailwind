import { Card } from '@material-tailwind/react'

const Widget = (props: { icon: JSX.Element; title: string; number: string; bgColor: string; color: string }) => {
  const { icon, title, number, bgColor, color } = props
  return (
    <Card className={`${bgColor} w-full h-full`}>
      <div className='flex items-center flex-col gap-2 p-5'>
        {icon}
        <h3 className={`${color}`}>{title}</h3>
        <span className={`text-2xl font-bold ${color}`}>{number}</span>
      </div>
    </Card>
  )
}

export default Widget
