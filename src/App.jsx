
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Main from './pages/Main'
import Html from './pages/html'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/html' element={<Html />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
