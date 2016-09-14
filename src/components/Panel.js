import React from 'react';

const Panel = ( { title = "Panel title", content = "Panel content"} ) => (

  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">
        {title}
      </h3>
    </div>
    <div className="panel-body">
      {content}
    </div>
  </div>

);

export default Panel;
