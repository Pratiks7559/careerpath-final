import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import './EmojiPicker.css';

const CustomEmojiPicker = ({ onSelect, onClose }) => {
  const handleEmojiClick = (emojiObject) => {
    onSelect(emojiObject.emoji);
  };

  return (
    <div className="custom-emoji-picker-wrapper">
      <div 
        className="custom-emoji-picker-overlay"
        onClick={onClose}
      />
      <div className="custom-emoji-picker-box">
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          groupVisibility={{
            flags: false,
            symbols: false,
            objects: false,
            travel_places: false,
            food_drink: false,
            activities: false,
          }}
          className="custom-emoji-picker-component"
        />
      </div>
    </div>
  );
};

export default CustomEmojiPicker;