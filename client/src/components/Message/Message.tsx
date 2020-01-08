import React, { FunctionComponent  } from 'react';

type MessageProps = {
    userName: string;
    message: string;
};

export const Message: FunctionComponent<MessageProps> = ({ userName, message }) => <div>
    <span>{userName}</span>:
    <span>{message}</span>
</div>;