import React from 'react';
import PropTypes from 'prop-types';
import style from './ReactNotification.css';

const ReactNotification = ({ slideFrom, position, duration, styles, autoFade, onHover, content }) => {
  const outerContainerStyle = {
    border: styles.border,
    backgroundColor: styles.backgroundColor,
  };

  const contentStyle = {
    color: styles.color,
    fontSize: styles.fontSize,
  };
  
  return (
    <div className={style.outerContainer} style={outerContainerStyle}>
      <div className={style.innerContainer}>
        <div className={style.contentContainer} style={contentStyle}>
          {content}
        </div>
      </div>
    </div>
  );
};

ReactNotification.propTypes = {
  slideFrom: PropTypes.string,
  position: PropTypes.string,
  duration: PropTypes.number,
  styles: PropTypes.object,
  autoFade: PropTypes.bool,
  onHover: PropTypes.string,
  content: PropTypes.string,
};

ReactNotification.defaultProps = {
  slideFrom: 'right',
  position: 'top-right',
  duration: 3000,
  styles: {
    border: '0.5px solid red',
    color: 'blue',
    backgroundColor: 'green',
    fontSize: '15px',
  },
  autoFade: true,
  onHover: 'enlarge',
  content: 'yoyoyo',
};

export default ReactNotification;
