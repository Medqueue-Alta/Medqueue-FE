import { ReactNode } from "react"

interface Props {
    children : ReactNode
}

const FaskesLayout = (props: Props) => {
    const {children} = props
  return (
    <div>
        {children}
    </div>
  )
}

export default FaskesLayout
