import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import "react-photo-view/dist/react-photo-view.css";
import ReviewProvider from './Context/ReviewProvider';
import AuthProvider from './Context/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <ReviewProvider>
        <RouterProvider router={router} />
      </ReviewProvider>
    </AuthProvider>
  );
}

export default App
