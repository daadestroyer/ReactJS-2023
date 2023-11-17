import React from "react";
import Courses from "./Courses";
import { useState } from "react";

export default function AllCourses() {
  const [courses, setCourses] = useState([
    {
      title: "Core Java",
      desc: "This course is for java developers",
    },
    {
      title: "Advance Java",
      desc: "This course is for java developers",
    },
    {
      title: "Spring Boot",
      desc: "This course is for java developers",
    }
  ]);

  return (
    <>
        <div className="container text-center">
        <h1>All Courses</h1>
        <p>List of courses are as follows:</p>
        {
            courses.length > 0 ? courses.map((singleCourse)=>(
                <Courses course={singleCourse}/>
            )) : <span style={{color:'red',fontWeight:'bold'}}>No Courses Found</span>
        }
        </div>
    </>
  )
}
