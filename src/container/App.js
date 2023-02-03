import React from 'react';
import InputBox from '../components/InputBox';
import TasksList from '../components/TasksList';
import './App.css';
import background from '../school-spiral-notebook-pink-background-stickers-lie-top-sheet-stationery-notes_78492-6199.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [{ task: 'write' }, { task: 'read' }, { task: 'sleep' }],
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);

    this.setState({ input: event.target.value });
  };

  onSubmitAdd = (event) => {
    event.preventDefault();
    const newTasks = [...this.state.tasks];
    newTasks.push({ task: this.state.input });
    this.setState({ tasks: newTasks });
    event.target.reset();
  };

  render() {
    return (
      <div>
        <img src={background} alt='background' />
        <div className='App'>
          <InputBox
            onInputChange={this.onInputChange}
            onSubmitAdd={this.onSubmitAdd}
          />
          <TasksList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
