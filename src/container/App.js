import React from 'react';
import InputBox from '../components/InputBox';
import TasksList from '../components/TasksList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      input: '',
    };
  }

  // onInputChange = (event) => {
  //   this.setState({ input: event.target.value });
  // };

  // onSubmitAdd = (event) => {
  //   event.preventDefault();
  //   const newTasks = [...this.state.tasks];
  //   newTasks.push({ name: this.state.input, done: false });
  //   localStorage.setItem('tasks', JSON.stringify(newTasks));
  //   this.setState({ tasks: newTasks });
  //   event.target.reset();
  // };

  // onClickDelete = (event) => {
  //   const index = event.target.dataset.index;
  //   const newTasks = [...this.state.tasks];
  //   newTasks.splice(index, 1);
  //   localStorage.setItem('tasks', JSON.stringify(newTasks));
  //   this.setState({ tasks: newTasks });
  // };

  // onToggleDone = (event) => {
  //   const index = event.target.dataset.index;
  //   const newTasks = [...this.state.tasks];
  //   newTasks[index].done = !newTasks[index].done;
  //   localStorage.setItem('tasks', JSON.stringify(newTasks));
  //   this.setState({ tasks: newTasks });
  // };

  render() {
    return (
      <div>
        {/* <img src={background} alt='background' /> */}
        <div className='App'>
          <React.Fragment>
            <InputBox
            // onInputChange={this.onInputChange}
            // onSubmitAdd={this.onSubmitAdd}
            />
            <TasksList
            // tasks={this.state.tasks}
            // onClickDelete={this.onClickDelete}
            // onToggleDone={this.onToggleDone}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
