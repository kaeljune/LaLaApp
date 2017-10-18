import Reactotron from 'reactotron-react-native';
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

// import '../../ReactotronConfig';

//const store = createStore(
const store = Reactotron.createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  )
);
//const store = Reactotron.createStore(rootReducer, compose(middleware))
persistStore(store,
  {
    storage: AsyncStorage, whitelist: ['fetchAcc', 'listRequest'], blacklist: ['nav']
  }
);

export default store;
