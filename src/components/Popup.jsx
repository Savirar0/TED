import React, { useState, useRef, useEffect } from 'react';

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupStyles, setPopupStyles] = useState({});
  const [contentOpacity, setContentOpacity] = useState(0);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  const openPopup = () => {
    const buttonElement = buttonRef.current;
    const popupElement = popupRef.current;
   
    setPopupStyles({
      width: `${buttonElement.offsetWidth}px`,
      height: `${buttonElement.offsetHeight}px`,
      top: `${buttonElement.getBoundingClientRect().top}px`,
      left: `${buttonElement.getBoundingClientRect().left}px`,
      display: 'block'
    });
   
    buttonElement.style.visibility = 'hidden';
   
    setTimeout(() => {
      setIsOpen(true);
    }, 0);
   
    setTimeout(() => {
      setContentOpacity(1);
    }, 300);
  };

  const closePopup = () => {
    setContentOpacity(0);
   
    setIsOpen(false);
   
    setTimeout(() => {
      buttonRef.current.style.visibility = 'visible';
      setPopupStyles({});
    }, 500);
  };


  const buttonStyles = {
    border: 0,
    padding: '10px 25px',
    color: 'white', 
    background: 'red', 
    borderRadius: '20px', 
    cursor: isOpen ? 'auto' : 'pointer',
    fontSize: '16px', 
    outline: 'none',
    fontFamily: 'Arial'
  };

  const popupBaseStyles = {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: 49,
    margin: 0,
    display: 'none',
    background: 'red',
    color: 'white',
    fontSize: '14px',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.46)',
    padding: '10px',
    borderRadius: '20px',
    transition: 'opacity 0.3s 0.5s, width 0.4s 0.1s, height 0.4s 0.1s, top 0.4s 0.1s, left 0.4s 0.1s, margin 0.4s 0.1s',
    ...popupStyles
  };

  const popupStyles_Open = isOpen ? {
    visibility: 'visible',
    zIndex: 100,
    top: '50%',
    left: '50%',
    width: '350px',
    height: '130px',
    margin: '-100px 0 0 -175px',
    transition: 'width 0.4s 0.1s, height 0.4s 0.1s, top 0.4s 0.1s, left 0.4s 0.1s, margin 0.4s 0.1s'
  } : {};

  const contentWrapStyles = {
    opacity: contentOpacity,
    transition: 'opacity 0.5s'
  };

  const bgStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: isOpen ? 99 : -1,
    background: 'rgba(226, 226, 226, 0.7)',
    opacity: isOpen ? 1 : 0,
    transition: 'opacity 0.5s',
    pointerEvents: isOpen ? 'auto' : 'none'
  };

  const closeIconStyles = {
    color: 'rgba(17, 21, 24, 0.81)',
    textShadow: 'none',
    float: 'right',
    fontSize: '20px',
    cursor: 'pointer',
    fontWeight: 700,
    lineHeight: '10px'
  };

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <button
        ref={buttonRef}
        style={buttonStyles}
        onClick={openPopup}
      >
        Riddle?
      </button>
     
      <div
        ref={popupRef}
        style={{ ...popupBaseStyles, ...popupStyles_Open }}
      >
        <div style={contentWrapStyles}>
          <div
            style={closeIconStyles}
            onClick={closePopup}
          >
            x
          </div>
          Riddle below
        </div>
        
        <div>
        "I capture moments, build connections, and spread ideas with just a tap."
        </div>
        To find your next clue where should you map?
      </div>
     
      <div style={bgStyles} onClick={closePopup}></div>
    </div>
  );
};

export default PopupButton;