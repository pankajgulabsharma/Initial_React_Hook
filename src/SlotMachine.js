import React from 'react'
const Result = () => { }
const SlotMachine = (props) => {
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
    const { x, y, z } = props

    if ((x === y && y === z)) {
        return (
            <div style={{textAlign:"center",backgroundColor:"yellow",width:"50%",padding:"5px",border:"5px solid #7af000",margin:"auto"}}>
                <h1>{x}  {y}  {z}</h1>
                <p>It is <span style={{ color: "darkgreen", fontWeight: "bold" }}>Matching</span></p>
            </div>
        );
    }
    else {
        return (
            <div style={{textAlign:"center",backgroundColor:"yellow",width:"50%",padding:"5px",border:"5px solid #7af000",margin:"auto"}}>
              <h1>{x}  {y}  {z}</h1>
                <p>It is <span style={{ color: "red" }}>Not-Matching</span></p>
            </div>
        );

    }

}
export default SlotMachine;
