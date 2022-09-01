import React from "react";

function ActiveButton({ id, onActive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onActive(id)}>Akitf Kembali</button>
  );
}

export default ActiveButton;
