import React from 'react';
import Browse from './components/Browse';
import Login from './components/Login';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Body/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <Body/>
        </RouterProvider>
      </Provider>
    </div>    
  );
}

export default App;
