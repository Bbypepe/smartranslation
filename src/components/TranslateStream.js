import React, { useState } from 'react';
import TranslationService from '../services/TranslationService';

const TranslateStream = () => {
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    const result = await TranslationService.translateStream('en', 'es', 'Hello, World!');
    setTranslatedText(result);
  };

  return (
    <div>
      <h2>Translate Stream</h2>
      <button onClick={handleTranslate}>Translate</button>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslateStream;
