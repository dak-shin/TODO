import React from 'react';
import "./styles.css";

interface props {
    task: string;
    settask: React.Dispatch<React.SetStateAction<string>>;
}
// Alternate syntax 🔽
// const IPfield: React.FC = ({ task, settask: props }) => {}

const IPfield: React.FC<props> = ({ task, settask }) => {
    return <div className='outer'>
        <form action="" className="input-form">
            <input type="text" name="taskName" id="taskName" className="input-box" placeholder='Enter a task!!'
                value={task}
                onChange={(e) => settask(e.target.value)}
            />
            <input type="submit" className="input-submit" value="Add" />
        </form>

    </div>;
};

export default IPfield;
