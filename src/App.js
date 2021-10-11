import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import TeaConatainer from './components/TeaConatainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        <TeaConatainer />
      </div>
    </Provider>
  );
}

export default App;
