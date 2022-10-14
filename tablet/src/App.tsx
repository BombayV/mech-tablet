import './index.css'
import './Tablet.css'
import { Routes, Route } from 'react-router-dom'
import ThemeOverride from './ThemeOverride'
import TabletWrapper from './TabletWrapper'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './tabs/home/components/Home'

function App() {
  return (
    <>
      <ThemeOverride>
        <TabletWrapper>
          <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </TabletWrapper>
      </ThemeOverride>
    </>
  )
}

export default App