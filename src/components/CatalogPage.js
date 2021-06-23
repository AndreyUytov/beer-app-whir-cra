import Header from './Header'
import Footer from './Footer'
import CatalogMain from './CatalogMain'
import PopupConsultation from './PopupConsultation'
import { useConsultationPopupContext } from './consultation-context'

export default function CatalogPage() {
  const { isVisible, setIsVisible } = useConsultationPopupContext()
  return (
    <>
      <Header />
      <CatalogMain />
      <Footer />
      <PopupConsultation isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  )
}
