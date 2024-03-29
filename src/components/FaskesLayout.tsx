import { ReactNode } from "react"
import FaskesSidebar from "./FaskesSidebar";

interface Props {
    children : ReactNode;
}

const FaskesLayout = (props: Props) => {
    const {children} = props
  return (
    <div className="flex items-center">
      <FaskesSidebar>
        <p>Tes</p>
      </FaskesSidebar>
      <div>
        {children}
      </div>
    </div>
  )
}

export default FaskesLayout
