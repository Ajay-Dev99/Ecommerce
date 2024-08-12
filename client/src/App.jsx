
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {

  return (
   <Router>

    <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
    </Routes>

   </Router>
  )
}

export default App
