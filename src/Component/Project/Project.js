import React from 'react'
import './Project.scss'

const CourseItem = ({ title, date }) => (
  <div className="ag-courses_item">
    <a href="#" className="ag-courses-item_link">
      <div className="ag-courses-item_bg"></div>

      <div className="ag-courses-item_title">{title}</div>

      {date && (
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">{date}</span>
        </div>
      )}
    </a>
  </div>
);

const CoursesBox = () => (
  <div className="ag-courses_box">
    <CourseItem title="Coffee Shop Website Design" date=" 04.11.2023" />
    <CourseItem title="UX/UI Web-Design + Mobile Design" date=" 04.11.2023" />
    <CourseItem title="E-Commerce Webpage" date=" 04.11.2023" />
    <CourseItem title="Graphic Design" date="04.11.2022" />
  </div>
);

const FormatContainer = () => (
  <div className="ag-format-container">
    <CoursesBox />
  </div>
);

export default FormatContainer;

