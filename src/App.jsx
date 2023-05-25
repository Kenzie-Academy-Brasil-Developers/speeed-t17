import { Header } from './components/Header'
import { CoverageSection } from './components/Sections/CoverageSection'
import { FeedbacksSection } from './components/Sections/FeedbacksSection'
import { HomeSection } from './components/Sections/HomeSection'

import './styles/index.css'

export const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <HomeSection />
        <CoverageSection />
        <FeedbacksSection />
      </main>
    </>
  )
}

// {
//   teste: 2,
//   App: ()
// }

// css modules
// css ->