import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import url from 'url';
import { NativeModules } from 'react-native';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
Reactotron.configure({ host: hostname }).useReactNative().use(reactotronRedux());
Reactotron.connect();
Reactotron.log('Hello world');
