import React from "react";

export default ({children}) => (
  <div style={{ margin: "3rem auto", maxWidth:1000, backgroundColor: `#eff0f1`, minHeight:500}} >
     <div style={{float: `left`, marginLeft: 50}}>
        {children}
      </div>
  </div>
);