import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Melbin & Nena Wedding – 31 May 2026 · Kolencherry, Kerala';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2520 40%, #1a1a1a 100%)',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid rgba(184, 149, 106, 0.3)',
            display: 'flex',
          }}
        />

        {/* Inner decorative border */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            left: '28px',
            right: '28px',
            bottom: '28px',
            border: '1px solid rgba(184, 149, 106, 0.15)',
            display: 'flex',
          }}
        />

        {/* Top ornament */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '8px',
          }}
        >
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #b8956a)', display: 'flex' }} />
          <span style={{ color: '#b8956a', fontSize: '14px', letterSpacing: '6px', textTransform: 'uppercase' as const }}>
            Together with their families
          </span>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #b8956a, transparent)', display: 'flex' }} />
        </div>

        {/* M & N Monogram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            margin: '12px 0',
          }}
        >
          <span
            style={{
              fontSize: '120px',
              color: '#b8956a',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            M
          </span>
          <span
            style={{
              fontSize: '36px',
              color: 'rgba(184, 149, 106, 0.5)',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              alignSelf: 'center',
              marginTop: '20px',
            }}
          >
            &
          </span>
          <span
            style={{
              fontSize: '120px',
              color: '#b8956a',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            N
          </span>
        </div>

        {/* Names */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: '#b8956a', display: 'flex' }} />
          <span
            style={{
              fontSize: '18px',
              color: '#e8ddd0',
              letterSpacing: '8px',
              textTransform: 'uppercase' as const,
            }}
          >
            Melbin & Nena
          </span>
          <div style={{ width: '40px', height: '1px', background: '#b8956a', display: 'flex' }} />
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '4px 0 16px',
          }}
        >
          <div style={{ width: '80px', height: '1px', background: 'rgba(184, 149, 106, 0.4)', display: 'flex' }} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b8956a" width="16" height="16">
            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
          </svg>
          <div style={{ width: '80px', height: '1px', background: 'rgba(184, 149, 106, 0.4)', display: 'flex' }} />
        </div>

        {/* Date & Venue */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              color: '#e8ddd0',
              letterSpacing: '4px',
            }}
          >
            31 · 05 · 2026
          </span>
          <span
            style={{
              fontSize: '13px',
              color: 'rgba(184, 149, 106, 0.7)',
              letterSpacing: '4px',
              textTransform: 'uppercase' as const,
            }}
          >
            Kolencherry, Kerala
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
