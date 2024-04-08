import { Button } from "@/components/ui/button"

interface Props {
    text: string
    className?: string
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void;
}

const MainButton = (props: Props) => {
    const {text, type, className, onClick} = props
  return <Button className={`bg-[#089993] hover:bg-[#1c5e5b] duration-500 ${className}`} type={type} onClick={onClick}>{text}</Button>
}

export default MainButton
