import React, { Component } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

class Keyboard extends React.Component {

  render() {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    })
    return (
      <div>
        <div>Keyboard Component</div>
          <Piano noteRange={{ first: firstNote, last: lastNote }} />
        </div>
    )
  }

}

export default Keyboard;