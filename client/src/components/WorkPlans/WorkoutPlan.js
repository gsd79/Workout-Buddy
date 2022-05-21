import React, { useState } from "react";
import ExerciseList from "../ExerciseList";
import CategoryMenu from "../CategoryMenu";
import WorkoutCart from "../WorkoutCart";
import WorkoutForm from "../../components/Workout Form";
import { Container } from "react-bootstrap";
import "../../pages/Styles/Profile.css"
import "./plans.css"

function WorkoutPlan() {
  const [categoryId, setCategoryId] = useState("");
  console.log(categoryId);

  return (
    <>
    <div className="profile-wrapper">
      <Container>
        <WorkoutForm/>
        <CategoryMenu
          onFeedback={(categorySelectedId) => {
            setCategoryId(categorySelectedId);
          }}
        />
        <ExerciseList categoryId={categoryId} />
        <WorkoutCart />
      </Container>
      </div>
    </>
  );
}

export default WorkoutPlan;
