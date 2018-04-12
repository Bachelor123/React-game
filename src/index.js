// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './tic-tac-toe';    //其实这个加载TicTacToe这个模块就是这个文件中输出的Game
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<TicTacToe />,document.getElementById('root'));
registerServiceWorker();