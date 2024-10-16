import React, { useState } from 'react';

const VoiceChanger = () => {
  const [voice, setVoice] = useState('Normal');

  const handleVoiceChange = (newVoice) => {
    setVoice(newVoice);
    // Add logic for changing voice here
  };

  return (
    <div>
      <h2>Voice Changer</h2>
      <select onChange={(e) => handleVoiceChange(e.target.value)} value={voice}>
        <option value="Normal">Normal</option>
        <option value="Deep">Deep</option>
        <option value="Robot">Robot</option>
      </select>
    </div>
  );
};

export default VoiceChanger;
