import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      imageUrl: '',
      maxChar: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onimageUrlChangeEventHandler = this.onimageUrlChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  
  onimageUrlChangeEventHandler(event) {
    this.setState(() => {
      return {
        imageUrl: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: '',
        body: '',
        imageUrl: '',
      }
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
         <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.maxChar - this.state.title.length}</p>
          <label for="title">Masukkan Judul:</label>
          <input id="title" className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <label for="note">Masukkan Catatan:</label>
          <textarea id="note" className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
          <label for="img">Pilih gambar:</label>
          <input type="file" id="img" name="img" accept="image/*" className="note-input__imageUrl"
          placeholder="Masukkan foto catatan" value={this.state.imageUrl}
          onChange={this.onimageUrlChangeEventHandler} required/>
          <button type="submit">Tambahkan Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
