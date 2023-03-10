import { Group } from './Components/Group/Group'
import { Events } from './Components/Main/Events/Events'
import {OpenPage} from './Components/Main/OpenPage'
import { PoolsList } from './Components/Main/Pools/PoolsList'
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
 

function App() {

  return (
   <>
<Routes>
          <Route path="/" element={<OpenPage />}/>
            <Route path="/pools" element={<PoolsList />}/>
              <Route path="/pools/:name" element={<Group />} />
              <Route path="/events" element={<Events/>} />

</Routes>   
</>
  )
}

export default App
