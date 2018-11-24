import React from 'react';

const DrumPad = (props) => {
  const {dataKey, kbdKey, sound} = props;
  return (
    <React.Fragment>
      <div data-key={ dataKey } className="key">
        <kbd>{ kbdKey }</kbd>
        <span className="sound">{ sound }</span>
      </div>
    </React.Fragment>
  );
};

export default DrumPad;