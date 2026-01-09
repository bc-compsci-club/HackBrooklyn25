import React from 'react';
import './Section.css';


const Section = ({ id, title, children, bgImage, pos = 'center', top, right, bottom, left, offsetX, offsetY, titleSize, textSize }) => {
  const hasExplicit = top !== undefined || right !== undefined || bottom !== undefined || left !== undefined;

  const posDefaults = {
    'top-left': { top: '2rem', left: '2rem', textAlign: 'left' },
    'top-center': { top: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' },
    'top-right': { top: '2rem', right: '2rem', textAlign: 'right' },
    'center-left': { top: '50%', left: '2rem', transform: 'translateY(-50%)', textAlign: 'left' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' },
    'center-right': { top: '50%', right: '2rem', transform: 'translateY(-50%)', textAlign: 'right' },
    'bottom-left': { bottom: '2rem', left: '2rem', textAlign: 'left' },
    'bottom-center': { bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' },
    'bottom-right': { bottom: '2rem', right: '2rem', textAlign: 'right' },
  };

  let contentStyle = {
    position: 'absolute',
  };

  if (hasExplicit) {
    if (top !== undefined) contentStyle.top = top;
    if (right !== undefined) contentStyle.right = right;
    if (bottom !== undefined) contentStyle.bottom = bottom;
    if (left !== undefined) contentStyle.left = left;
  } else {
    const base = posDefaults[pos] || posDefaults['center'];
    contentStyle = { ...contentStyle, ...base };
  }

  // Apply offsets if provided
  if ((offsetX || offsetY) && contentStyle.transform) {
    const x = offsetX || '0px';
    const y = offsetY || '0px';
    // Combine with existing translate using CSS calc
    if (contentStyle.transform.includes('translate(-50%, -50%)')) {
      contentStyle.transform = `translate(calc(-50% + ${x}), calc(-50% + ${y}))`;
    } else if (contentStyle.transform.includes('translateX(-50%)')) {
      contentStyle.transform = `translate(calc(-50% + ${x}), ${y || '0px'})`;
    } else if (contentStyle.transform.includes('translateY(-50%)')) {
      contentStyle.transform = `translate(${x || '0px'}, calc(-50% + ${y}))`;
    }
  }

  return (
    <section
      id={id}
      className="section"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        color: '#fff',
      }}
    >
      <div className="section-content" style={{ ...contentStyle, color: '#570800', fontSize: textSize }}>
        <h1 style={titleSize ? { fontSize: titleSize } : undefined}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
