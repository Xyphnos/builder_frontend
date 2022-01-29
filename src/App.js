import CustomRouter from './builder/routes/routes'
import { store } from './builder/redux/store'; 
import { Provider } from 'react-redux';


const App = () => {

  return (
    <Provider store={store || {}}>
      <div className="App">
        <CustomRouter/>
      </div>
    </Provider>

  );
}

export default App;
