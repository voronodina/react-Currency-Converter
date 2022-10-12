import React from "react";
const Myinput = React.forwardRef((props, ref)=> {
    return(
        <input ref={ref} className="Myinput" {...props} />
    );
}) ;

export default Myinput;