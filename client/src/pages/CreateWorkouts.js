import { useState } from "react";
import Card from "react-bootstrap/Card";
import '../pages/Styles/Pages.css';


function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div id="form-wrapper">
      <form>
        {/* {" "}
        {onSubmit={handleSubmit}
} */}
        <label>
          Enter the name of your new workout:
          <input
            type="text"
            name="Workout Name"
            value={inputs.workoutName || ""}
            onChange={handleChange}
          />
        </label>
        <textarea
          name="Workout Description"
          value={inputs.description || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Gun It</Card.Title>
            <Card.Text>bicep burnout</Card.Text>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}

export default MyForm;
