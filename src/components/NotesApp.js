import React from "react";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils/data";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      querySearch: '',
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body, imageUrl }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            imageUrl: '/images/default.jpg',
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onActiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onSearchEventHandler({ query }) {
    this.setState(() => {
      return { querySearch: query }
    });
  }

  render() {
    return (
      <>
        <NoteHeader searchNote={this.onSearchEventHandler} />
        <NoteBody addNote={this.onAddNoteEventHandler} notes={this.state.notes} querySearch={this.state.querySearch} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
      </>
    );
  }
}

export default NotesApp;
