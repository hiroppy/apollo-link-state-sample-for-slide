import * as React from 'react';
import { Button } from './Button';
import { Counter } from './Counter';
import { Id } from './Id';

const containerStyle = {
  margin: 'auto',
  width: 400,
  top: 150,
  position: 'relative' as 'relative',
  fontFamily: "'Roboto Condensed', sans-serif"
};

const boxStyle = {
  margin: 10,
  height: 25
};

const labelStyle = {
  width: 70,
  display: 'inline-block'
};

export const Top: React.FC = () => (
  <div style={containerStyle}>
    <div style={boxStyle}>
      <span style={labelStyle}>id: </span>
      <Id />
    </div>
    <div style={boxStyle}>
      <span style={labelStyle}>local: </span>
      <Counter />
    </div>
    <div style={boxStyle}>
      <span style={labelStyle}>remote: </span>
      <Button />
    </div>
  </div>
);
