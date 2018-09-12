import React from 'react';

export class Fruits extends React.Component{
  render() {
    return(
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
        </head>
        <div>
          <h1>Welcome To Fruits</h1>
          <img src={ require('./images/vegetables.jpg') } />
        </div>
        </html>);
        }
}
