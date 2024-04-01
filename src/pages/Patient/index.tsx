import PatientInformationCard from '@/components/PatientInformationCard'
import PatientLayout from '@/components/PatientLayout'


const PatientHome = () => {
  return (
    <PatientLayout>
        <div>
        <PatientInformationCard nama='John Doe' NIK='123456789' BJPS='1234556'/>
        
        </div>
    </PatientLayout>
  )
}

export default PatientHome