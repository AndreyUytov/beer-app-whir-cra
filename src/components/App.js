import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import CatalogPage from './CatalogPage'
import { ConsultationPopupProvider } from './consultation-context'

export default function App() {
  return (
    <Router>
      <Switch> 
        <ConsultationPopupProvider>
          <Route path="/beer-app-whir-cra">
            <LandingPage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
        </ConsultationPopupProvider>
      </Switch>
    </Router>
  )
}
