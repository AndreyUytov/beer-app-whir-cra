import './App.scss'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LandingPage from './LandingPage'
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
      </Switch>
    </Router>
  )
}
