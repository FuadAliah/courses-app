import React from 'react'


const AddCourse = (props) => {
    return (
        <form onSubmit={props.addCourse} className="addCourseForm">
            <input type="text" value={props.current} placeholder="Add Team..." onChange={props.updateCourse} />
            <input type="submit" value="Add Team" />
            <p className="ErrorMsg">{props.err}</p>
        </form>
    )
}

export default AddCourse