import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "./components/FaskesSidebar"
import FaskesContainer from "./components/FaskesContainer"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"


function App() {

  return (
   <FaskesLayout>
      <FaskesSidebar nav={["Poli Umum","Poli Gigi & Mulut", "Poli KIA", "UGD"]}/>
      <FaskesContainer title="Tambah Jadwal">
        <div className="mt-3 w-[40%]">
          <div className="mb-3">
            <Label>Poli Klinik</Label>
            <Input placeholder="Poli Klinik"/>
          </div>
        </div>
      </FaskesContainer>
   </FaskesLayout>
  )
}

export default App
