import React from "react";
import NoteItemImage from './NoteImage';


function NoteItemContent({ title, date, body, imageUrl }) {
  return (
    
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{date}</p>
      <NoteItemImage imageUrl={imageUrl} />
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
