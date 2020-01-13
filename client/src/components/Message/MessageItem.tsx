import * as React from 'react';

type MessageProps = {
    userName: string;
    message: string;
};

export const MessageItem: React.FunctionComponent<MessageProps> = ({ userName, message }) => <div>
    <span>{userName}</span>:
    <span>{message}</span>
</div>;
