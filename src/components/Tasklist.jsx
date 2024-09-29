
import React from "react";
import {useState} from "react";
export default function Tasklist(props) {

    const [fullStartTime, setFullStartTime] = useState(false);
    const [fullEndTime, setFullEndTime] = useState(false);

    const toggleStartTime = () => {
        setFullStartTime((prev) => !prev);

    };

    const toggleEndTime = () => {
        setFullEndTime((prev)=>!prev);
    };

    const shortStartTime = props.start.toDateString() + " " + props.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const shortEndTime = props.end.toDateString() + " " + props.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    let isAllDay;
    if (props.allDay === true){
        isAllDay = "All Day";
    }
    // {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in to continue.</p>}
   return (  
    <div>
        
        <div className=" bg-white text-dark mt-4 ml-4 flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
        <h1><b>{props.title}</b></h1>
        <h1> <b>Start Time: </b> <span onClick={toggleStartTime} className="cursor-pointer" >{fullStartTime ? props.start.toString() : shortStartTime} </span></h1> 
        {/* <h1>
  <b>End Time:</b> <span onClick={toggleEndTime} className="cursor-pointer"> {fullEndTime ? props.end.toString() :shortStartTime} </span> {props.allDay ? <span>All day</span> : <span>{props.end.toString()}</span>}
</h1> */}
<h1>
    <b>End Time: </b>
    {/* Only display "All Day" if props.allDay is true */}
    {props.allDay ? (
        <span>All Day</span>
    ) : (
        <span onClick={toggleEndTime} style={{ cursor: 'pointer' }}>
            {fullEndTime ? props.end.toString() : props.end.toLocaleString()}
        </span>
    )}
</h1>
        {/* <h1> <b>End Time: {props.allDay ? <h1> AllDay </h1> : <h1>{props.end.toString()} </h1>  */}
           
            {/* <h2>{start}</h2>
            <br>{end}</br> */}
        </div>




    </div>
  );
}

// export default function SidebarTasks() {
//     return <div className="bg-red-400 h-96"></div>;
// }
