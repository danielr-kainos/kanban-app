import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class App extends React.Component {
  render() {
    const {notes} = this.props;

    return (
      <div>
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}/>
      </div>
    );
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    })
  };

  activateNoteEdit = (id) => {
    this.props.NoteActions.update({id, editing: true});
  };

  editNote = (id, task) => {
    const {NoteActions} = this.props;

    NoteActions.update({id, task, editing: false});
  };

  deleteNote = (id, e) => {
    // avoid bubbling to edit
    e.stopPropagation();

    this.props.NoteActions.delete(id);
  }
}

export default connect(({notes}) => ({
  notes
}), {
  NoteActions
})(App)
