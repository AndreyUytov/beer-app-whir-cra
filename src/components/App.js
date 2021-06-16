import './App.scss'

import Header from './Header'
import MainIndex from './MainIndex'
import Banner from './Banner'

export default function App() {
  return (
    <>
      <Header />
      <MainIndex>
        <Banner />
      </MainIndex>
    </>
  )
}
