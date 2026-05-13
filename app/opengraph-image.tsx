import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Melbin & Nena Wedding – 31 May 2026 · Kolencherry, Kerala';

export default async function Image() {
  const imageData = await readFile(
    join(process.cwd(), 'public', 'og-preview.jpg')
  );
  const base64Image = `data:image/jpeg;base64,${imageData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#1a1a1a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Illustration - left/center area */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '55%',
            height: '100%',
            display: 'flex',
            backgroundImage: `url(${base64Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />

        {/* Gradient overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            left: '35%',
            top: 0,
            width: '65%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent 0%, #1a1a1a 40%)',
            display: 'flex',
          }}
        />

        {/* Text content - right side */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* Top ornament */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #b8956a)',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: 'rgba(184, 149, 106, 0.8)',
                fontSize: '11px',
                letterSpacing: '5px',
                textTransform: 'uppercase' as const,
                fontFamily: 'Georgia, serif',
              }}
            >
              Wedding Invitation
            </span>
            <div
              style={{
                width: '40px',
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
              gap: '14px',
              margin: '8px 0',
            }}
          >
            <span
              style={{
                fontSize: '88px',
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
                fontSize: '28px',
                color: 'rgba(184, 149, 106, 0.45)',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                marginTop: '16px',
              }}
            >
              &amp;
            </span>
            <span
              style={{
                fontSize: '88px',
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
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '30px',
                height: '1px',
                background: '#b8956a',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                color: '#e8ddd0',
                letterSpacing: '6px',
                textTransform: 'uppercase' as const,
                fontFamily: 'Georgia, serif',
              }}
            >
              Melbin &amp; Nena
            </span>
            <div
              style={{
                width: '30px',
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
              gap: '10px',
              margin: '4px 0 14px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '1px',
                background: 'rgba(184, 149, 106, 0.35)',
                display: 'flex',
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#b8956a"
              width="12"
              height="12"
            >
              <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
            </svg>
            <div
              style={{
                width: '50px',
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
              gap: '5px',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                color: '#e8ddd0',
                letterSpacing: '3px',
                fontFamily: 'Georgia, serif',
              }}
            >
              31 · 05 · 2026
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(184, 149, 106, 0.65)',
                letterSpacing: '4px',
                textTransform: 'uppercase' as const,
                fontFamily: 'Georgia, serif',
              }}
            >
              Kolencherry, Kerala
            </span>
          </div>
        </div>

        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            right: '14px',
            bottom: '14px',
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
