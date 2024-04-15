import React from 'react';

export type BoardProps = {
  isActive: boolean;
  requestDisplay: (durationSeconds: number, urgency: number) => boolean;
} 

export type Board = React.FC<BoardProps>;

