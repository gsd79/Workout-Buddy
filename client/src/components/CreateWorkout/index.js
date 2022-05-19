   
   
   const createWorkout = () => {
   
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
    };

export default createWorkout;