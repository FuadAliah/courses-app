import React, { Fragment, Component } from 'react'

class CoursesList extends Component {
    state = {
        isEdit: false
    }

    renderCourses = () => {
        return (
            <li className="listItems">
                <span>{this.props.details.name}</span>
                <div className="Actions">
                    <button id="edit" onClick={() => this.toggleState()}>Edit</button>
                    <button id="delete" onClick={() => this.props.deleteCourse(this.props.index)}>Delete</button>
                </div>
            </li>
        )
    }

    updateCourse = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleState();
    }

    renderForm = () => {
        return (
            <form className="UpdateForm" onSubmit={this.updateCourse}>
                <input className="updateInput" type="text" ref={val => this.input = val} defaultValue={this.props.details.name} required />
                <button className="updateBtn" type="submit">Update</button>
            </form>
        )
    }

    toggleState = () => {
        let { isEdit } = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    render() {
        let { isEdit } = this.state
        return (
            <Fragment>
                {isEdit ? this.renderForm() : this.renderCourses()}
            </Fragment>
        )
    }


}

export default CoursesList