import { useEffect, useRef } from 'react';

const ABOUT_BASE_VIEWBOX = { width: 1920, height: 1080 };

function About() {
  return (
    <div className="relative w-full" id="about">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${ABOUT_BASE_VIEWBOX.width} / ${ABOUT_BASE_VIEWBOX.height}` }}
      >
        {/* Carpet bottom - background layer, covers full bottom */}
        <img
          src="/images/component_images/carpet(bottom).svg"
          alt="Carpet bottom"
          className="absolute select-none pointer-events-none"
          style={{
            bottom: '0%',
            left: '0%',
            width: '100%',
            height: 'auto',
            zIndex: 0,
            objectFit: 'fill',
          }}
        />

        {/* Carpet - layered on top */}
        <img
          src="/images/component_images/carpet.svg"
          alt="Carpet"
          className="absolute select-none pointer-events-none"
          style={{
            bottom: '0%',
            left: '-2%',
            width: '75%',
            height: 'auto',
            zIndex: 1,
          }}
        />

        {/* ABOUT title */}
        <div
          className="absolute select-none"
          style={{
            top: '8%',
            left: '4%',
            zIndex: 5,
            fontFamily: '"Arial Black", "Impact", sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(48px, 10vw, 180px)',
            lineHeight: '0.95',
            color: '#8B1A1A',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          ABOUT
        </div>

        {/* About text */}
        <div
          className="absolute"
          style={{
            top: '44%',
            left: '4%',
            width: '50%',
            zIndex: 5,
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(12px, 1.6vw, 28px)',
            lineHeight: '1.6',
            color: '#f5e6d0',
          }}
        >
          <span style={{ fontWeight: 700, color: '#fff' }}>Hack Brooklyn</span> is Brooklyn College's 36 hour overnight event where participants team up in groups of four to build innovative tech projects from scratch. We offer workshops, mini-events, and activities to help participants learn new skills, network, and take fun breaks from coding.
        </div>
      </div>
    </div>
  );
}

export default About;