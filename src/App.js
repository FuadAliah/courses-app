import React, { Component } from "react";
import AddCourse from "./components/AddCourse/AddCourse";
import CoursesList from "./components/CoursesList/CoursesList";

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "JavaScript" },
      { name: "Python" }
    ],
    current: "",
    err: "",
  };

  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    let length = current.length;
    if (length) {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
        err: "",
      });
    } else {
      this.setState({
        err: "Enter Course Name",
      });
    }
  };

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };

  inputHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { courses } = this.state;
    const length = this.state.courses.length;
    const coursesList = length ? (
      courses.map((course, index) => {
        return (
          <CoursesList
            details={course}
            key={index}
            index={index}
            courses={this.state.courses}
            deleteCourse={this.deleteCourse}
            editCourse={this.editCourse}
          />
        );
      })
    ) : (
      <p className="emptyMsg">There are no Courses here!</p>
    );
    return (
      <div className="App">
        <p className="title">
          All Courses{" "}
          <span className="teamNumber">({this.state.courses.length})</span>
        </p>
        <AddCourse
          current={this.state.current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          err={this.state.err}
        />
        <ul className="list"> {coursesList} </ul>
      </div>
    );
  }
}

export default App;
