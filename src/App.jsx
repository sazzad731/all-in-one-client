import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import "react-photo-view/dist/react-photo-view.css";

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
