import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ChatContainer } from '@containers/ChatContainer';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ChatContainer />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
