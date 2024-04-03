import { Button } from "@/components/ui/button"

interface Props {
    text: string
    className?: string
    type?: "submit" | "reset" | "button" | undefined
}

const MainButton = (props: Props) => {
    const {text, type, className} = props
  return <Button className={`bg-[#089993] hover:bg-[#1c5e5b] duration-500 ${className}`} type={type}>{text}</Button>
}

export default MainButton
