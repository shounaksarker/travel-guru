import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepickerr.css'


const DatePickerr = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
        return (
          <div className="date-div">
          <ReactDatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate = {startDate}
          endDate = {endDate}
          > </ReactDatePicker>

          <span className="to">To</span>

          <ReactDatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate = {startDate}
          endDate = {endDate}
          ></ReactDatePicker>
         
         </div>
          
        );
      };

export default DatePickerr;