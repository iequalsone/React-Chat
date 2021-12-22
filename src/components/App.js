import { App as SendBirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SendBirdApp
        appId={'37C1BBDD-51A2-4655-935E-0E8A728C52D4'}
        userId={'Jon Howard'}
      />
    </div>
  );
};

export default App;