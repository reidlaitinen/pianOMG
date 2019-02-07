import React, { Component } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import Soundfont from 'soundfont-player';
import SoundfontProvider from '../SoundFontProvider.js';
import DimensionsProvider from '../DimensionsProvider.js';

import 'react-piano/dist/styles.css';


class ResponsivePiano extends React.Component {

  render() {

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
    const noteRange = {
      first: MidiNumbers.fromNote('a2'),
      last: MidiNumbers.fromNote('f4'),
    };
    const props = this.props;

    return (
      <DimensionsProvider>
        {({ containerWidth, containerHeight }) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <Piano
                noteRange={noteRange}
                width={containerWidth}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
    );
  }
}

export default ResponsivePiano;