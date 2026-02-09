import { ToastContainer } from 'react-toastify'
import './App.css'
import UsersPage from './pages/UsersPage.tsx'
function App() {


  return (
    <>
           <ToastContainer position="top-right" autoClose={3000} />
      <UsersPage />
    </>
  )
}

export default App
