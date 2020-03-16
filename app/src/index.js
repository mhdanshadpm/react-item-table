import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ItemTable } from './ItemTable';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ItemTable />, document.getElementById('root'));
serviceWorker.unregister();
