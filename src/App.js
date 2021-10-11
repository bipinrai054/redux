import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import TeaConatainer from './components/TeaConatainer';
// import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer />
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        {/* <TeaConatainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
