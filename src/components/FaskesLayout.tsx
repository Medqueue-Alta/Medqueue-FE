import { ReactNode } from "react"
interface Props {
    children : ReactNode;
}

const FaskesLayout = (props: Props) => {
    const {children} = props
  return (
      <div className="flex items-center">
        {children}
      </div>
  )
}

export default FaskesLayout
