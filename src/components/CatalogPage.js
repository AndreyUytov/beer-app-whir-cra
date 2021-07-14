import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import CatalogMain from './CatalogMain'
import CardMain from './CardMain'
import PopupConsultation from './PopupConsultation'
import { useConsultationPopupContext } from './consultation-context'

export default function CatalogPage() {
  const { isVisible, setIsVisible } = useConsultationPopupContext()
  return (
    <>
      <Header />
      
      <Switch>
        <Route exact path='/catalog'>
          <CatalogMain />
        </Route>
        <Route path='/catalog/:productId'>
          <CardMain />
        </Route>
      </Switch>

      <Footer />
      <PopupConsultation isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  )
}
