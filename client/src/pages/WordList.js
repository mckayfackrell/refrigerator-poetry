import React from 'react';

const WordList = (props) => {

  return (
    <div>
      {props.dmWordList &&
        props.dmWordList.map((wordInfo) => (
          <button key={wordInfo.word} className="magnet" onClick={() => props.moveMagnet(wordInfo.word)}>{wordInfo.word}</button>
        ))}
    </div>
  );
};

export default WordList;
