import React from 'react';
import './button.css';
const button = (props)=>{
return(
<div className = "button">

<button type = "button" onclick = "alert('hello world!')">click me!</button>
</div>
)
};
export default button;