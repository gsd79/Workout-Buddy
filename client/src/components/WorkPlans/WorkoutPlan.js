import React, { useState } from "react";
import ExerciseList from "../ExerciseList";
import CategoryMenu from "../CategoryMenu";
import WorkoutCart from "../WorkoutCart";
import { Container } from "react-bootstrap";

function WorkoutPlan() {
  const [categoryId, setCategoryId] = useState("");
  console.log(categoryId);

  return (
    <>
      <Container>
        <CategoryMenu
          onFeedback={(categorySelectedId) => {
            setCategoryId(categorySelectedId);
          }}
        />
        <ExerciseList categoryId={categoryId} />
        <WorkoutCart />
      </Container>
    </>
  );
}

export default WorkoutPlan;
