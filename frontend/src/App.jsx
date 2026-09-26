import Home from './page/Home'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

function App() {
  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/Chettinad-bg-mobile.webp')] md:bg-[url('/images/Chettinad-bg-desktop.webp')]">
        <Home />
      </div>
    </SmoothScroll>
  )
}

export default App
