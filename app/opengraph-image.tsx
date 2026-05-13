import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Melbin & Nena Wedding – 31 May 2026 · Kolencherry, Kerala';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'serif',
          padding: '60px',
        }}
      >
        {/* Top ornament */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #b8956a)',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: 'rgba(184, 149, 106, 0.8)',
              fontSize: '16px',
              letterSpacing: '8px',
              textTransform: 'uppercase',
            }}
          >
            Wedding Invitation
          </span>
          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, #b8956a, transparent)',
              display: 'flex',
            }}
          />
        </div>

        {/* M & N Monogram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            margin: '10px 0',
          }}
        >
          <span
            style={{
              fontSize: '180px',
              color: '#b8956a',
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            M
          </span>
          <span
            style={{
              fontSize: '54px',
              color: 'rgba(184, 149, 106, 0.45)',
              fontStyle: 'italic',
              marginTop: '45px',
            }}
          >
            &amp;
          </span>
          <span
            style={{
              fontSize: '180px',
              color: '#b8956a',
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
            gap: '15px',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#b8956a',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: '28px',
              color: '#e8ddd0',
              letterSpacing: '10px',
              textTransform: 'uppercase',
            }}
          >
            Melbin &amp; Nena
          </span>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#b8956a',
              display: 'flex',
            }}
          />
        </div>

        {/* Star divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '4px 0 30px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(184, 149, 106, 0.35)',
              display: 'flex',
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#b8956a"
            width="24"
            height="24"
          >
            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
          </svg>
          <div
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(184, 149, 106, 0.35)',
              display: 'flex',
            }}
          />
        </div>

        {/* Date & Venue */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '42px',
              color: '#e8ddd0',
              letterSpacing: '6px',
            }}
          >
            31 · 05 · 2026
          </span>
          <span
            style={{
              fontSize: '18px',
              color: 'rgba(184, 149, 106, 0.65)',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            Kolencherry, Kerala
          </span>
        </div>

        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            right: '30px',
            bottom: '30px',
            border: '1px solid rgba(184, 149, 106, 0.2)',
            display: 'flex',
            pointerEvents: 'none',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
