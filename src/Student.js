import React from 'react';
import './Student.css';

// function Student(props)
// props.studentName - props.studentDescription

// function Student(props)
// const { studentName, studentDescription } = props;

// { studentName, studentDescription, studentImage="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" }
function Student({ studentName, studentDescription, studentImage, studentAge, sayHello, surveyDone }) {
  // console.log('PROPS:', props);

  // const { studentName, studentDescription } = props
  return (
    <div className={`student-item ${surveyDone ? "good-student" : "bad-student"}`}>
      <h2>Student name: {studentName} - Student age: {studentAge}</h2>
      <p>
        {studentDescription}
      </p>
      <img src={studentImage ? studentImage : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"} alt="" srcset=""/>
      <button onClick={() => sayHello(studentName)} >
        Click to say hello!
      </button>
    </div>
  )
}

export default Student;