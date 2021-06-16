import './App.scss'

import Header from './Header'
import MainIndex from './MainIndex'
import Banner from './Banner'
import Categories from './Categories'
import About from './About'
import Popular from './Popular'
import Choice from './Choice'
import Articles from './Articles'

export default function App() {
  return (
    <div className="index-page">
      <Header />
      <MainIndex>
        <Banner />
        <Categories />
        <About />
        <Popular />
        <Choice />
        <Articles />
      </MainIndex>
    </div>
  )
}
