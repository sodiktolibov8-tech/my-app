
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './pages/FirstPage'
import MainPage from './pages/MainPage'
import SettingPage from './pages/SettingPage'
import LayoutPages from './layout/LayoutPages'
// import LayoutPage from './layout/LayoutPAge'


function App() {

  return (
    <>
      <Routes>
        <Route element={<LayoutPages />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/first' element={<FirstPage />} />
          <Route path='/setting' element={<SettingPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
