
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse';
import Login from './components/Login';
import Body from './components/Body';

const appRouter=createBrowserRouter([
  {
      path:'/',
      element:<Login/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Body/>
      </RouterProvider>
    </div>    
  );
}

export default App;
