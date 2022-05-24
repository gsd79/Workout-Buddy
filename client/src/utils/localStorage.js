export const getSavedWorkoutIds = () => {
  const savedWorkoutIds = localStorage.getItem("saved_workouts")
    ? JSON.parse(localStorage.getItem("saved_workouts"))
    : [];

  return savedWorkoutIds;
};

export const saveWorkoutIds = (workoutIdArr) => {
  if (workoutIdArr.length) {
    localStorage.setItem("saved_workouts", JSON.stringify(workoutIdArr));
  } else {
    localStorage.removeItem("saved_workouts");
  }
};

export const removeWorkoutId = (workoutId) => {
  const savedWorkoutIds = localStorage.getItem("saved_workouts")
    ? JSON.parse(localStorage.getItem("saved_workouts"))
    : null;

  if (!savedWorkoutIds) {
    return false;
  }

  const updatedSavedWorkoutIds = savedWorkoutIds?.filter(
    (savedWorkoutId) => savedWorkoutId !== workoutId
  );
  localStorage.setItem(
    "saved_workouts",
    JSON.stringify(updatedSavedWorkoutIds)
  );

  return true;
};
