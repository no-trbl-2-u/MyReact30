import React from 'react';

const DrumPad = (props) => {
  const {dataKey, kbdKey, sound} = props

  return (
    <div>
      <div data-key={ dataKey } className="key">
        <kbd>{ kbdKey }</kbd>
        <span className="sound">{ sound }</span>
      </div>
    </div>
  );
};

export default DrumPad;