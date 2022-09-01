import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>Work Notes</h1>
      <NoteSearch searchNote={searchNote} />
    </div>
  );
}

export default NoteHeader;
