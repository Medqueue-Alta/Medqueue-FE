import { Button } from "./ui/button"

interface Props {
    text: string
}

const MainButton = (props: Props) => {
    const {text} = props
  return <Button className="bg-[#089993] hover:bg-[#1c5e5b] duration-500">{text}</Button>
}

export default MainButton
