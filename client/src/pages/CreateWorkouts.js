// import { useState } from "react";
// import Card from "react-bootstrap/Card";
// import '../pages/Styles/Pages.css';


// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   };

//   return (
//     <div id="form-wrapper">
//       <form>
//         {/* {" "}
//         {onSubmit={handleSubmit}
// } */}
//         <label>
//           Enter the name of your new workout:
//           <input
//             type="text"
//             name="Workout Name"
//             value={inputs.workoutName || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <textarea
//           name="Workout Description"
//           value={inputs.description || ""}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>Gun It</Card.Title>
//             <Card.Text>bicep burnout</Card.Text>
//           </Card.Body>
//         </Card>
//       </form>
//     </div>
//   );
// }

// export default MyForm;



import React from "react";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    ({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  //   resetForm(){
  //     this.setState({name: ‘’, email: ‘’, message: ‘’})
  //   }

  render() {
    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Workout Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Notes</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="Add Workout" className="btn btn-primary">
            Add Workout
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default App;
