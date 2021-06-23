import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import CatalogPage from './CatalogPage'
import { ConsultationPopupProvider } from './consultation-context'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/beer-app-whir-cra">
          <ConsultationPopupProvider>
            <LandingPage />
          </ConsultationPopupProvider>
        </Route>

        <Route path="/catalog">
          <ConsultationPopupProvider>
            <CatalogPage />
          </ConsultationPopupProvider>
        </Route>
      </Switch>
    </Router>
  )
}
