import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux'
import { store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
     <App/>
    </Provider>
  </React.StrictMode>
);


/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>*/