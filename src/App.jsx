import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Catalogs } from './pages/Catalogs/Catalogs';
import { Clients } from './pages/Clients';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/catalogs' element={<Catalogs />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
    </>
  )
}
export default App;