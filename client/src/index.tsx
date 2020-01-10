import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ChatContainer } from '@containers/ChatContainer';
import { ControlPanel } from '@containers/ControlPanel';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ChatContainer />
        <ControlPanel />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
