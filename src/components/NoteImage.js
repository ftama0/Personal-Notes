import React from 'react';
 
function NoteItemImage({ imageUrl }) {
 return (
   <div className="note-item__image">
     <img src={imageUrl} alt="gambar catatan"/>
   </div>
 );
}
 
export default NoteItemImage;