import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import "react-photo-view/dist/react-photo-view.css";
import ReviewProvider from './Context/ReviewProvider';

function App() {

  return (
    <ReviewProvider>
      <RouterProvider router={router} />
    </ReviewProvider>
  );
}

export default App
