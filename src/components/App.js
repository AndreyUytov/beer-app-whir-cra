import './App.scss'

import LandingPage from './LandingPage'
import { ConsultationPopupProvider } from './consultation-context'

export default function App() {
  return (
    <ConsultationPopupProvider>
      <LandingPage />
    </ConsultationPopupProvider>
  )
}
