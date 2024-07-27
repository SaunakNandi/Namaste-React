import './App.css';
import Head from './components/Head';
import { Body } from './components/Body';
import { Provider } from 'react-redux'
import store from './utlils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import UseRef from './components/use_Ref';

const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      // these children get loaded where the outlet is (We have placed Outlet in body)
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      },
      {
        path:'/demo',
        element:<UseRef/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head/>
        <RouterProvider router={AppRouter}>
          <Body/>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
