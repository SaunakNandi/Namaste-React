import './App.css';
import Head from './components/Head';
import { Body } from './components/Body';
import { Provider } from 'react-redux'
import store from './utlils/store';
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
