import React from 'react';

export default function MessageList(props) {
  const messages = props.messages.map(message => {
    return <li>{ message.name }: { message.content }</li>;
  });

  return (
    <ul>
      { messages }
    </ul>
  )
}