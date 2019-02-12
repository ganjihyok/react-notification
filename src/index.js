import React from 'react';
import ReactDOM from 'react-dom';
import ReactNotification from './components/ReactNotification';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<ReactNotification />, MOUNT_NODE);