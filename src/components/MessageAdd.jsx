import React from 'react';

export default function MessageAdd(props) {
  return (
    <input type='text' onKeyDown={ (event) => {
      if(event.key === 'Enter') {
        props.onAddMessage(event.target.value);
        event.target.value = '';
      }
    }} />
  )
}