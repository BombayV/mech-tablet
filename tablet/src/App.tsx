import './index.css'
import './Tablet.css'
import ThemeOverride from './ThemeOverride'
import TabletWrapper from './TabletWrapper'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <ThemeOverride>
        <TabletWrapper>
          <Sidebar />
        </TabletWrapper>
      </ThemeOverride>
    </>
  )
}

export default App