import { useContext, useState } from "react";
import {CardContext} from "../App"
const CourseCard = (props) => {
  const { dispatch } = useContext(CardContext);
  return (props.state.map(obj => {
    return (<>
      <div class="CourseCard">
        <tr id="CC">
          <td>
            <div class="tag">
              <p>วิชา : {obj.name}</p>
              <p>เกรด : {obj.a}</p>
              <p>หน่วยกิต : {obj.c}</p>
            </div>
          </td>
          <td>
            <button class="btn" onClick = {()=>{
                dispatch({
                    type: "DELETE_CARD",
                    payload: obj.id,
                });}}>x</button>
          </td>
        </tr>
      </div>
    </>)
  }))
  
};

export default CourseCard;
