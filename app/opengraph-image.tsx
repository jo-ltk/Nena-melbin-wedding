import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 800, height: 420 };
export const contentType = 'image/png';
export const alt = 'Melbin & Nena Wedding – 31 May 2026 · Kolencherry, Kerala';

export default async function Image() {
  // Read the compressed image
  const imageData = await readFile(
    join(process.cwd(), 'public', 'og-preview-small.jpg')
  );
  const base64Image = `data:image/jpeg;base64,${imageData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '800px',
          height: '420px',
          display: 'flex',
          background: '#1a1a1a',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'serif',
        }}
      >
        {/* Illustration - left/center area */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '400px',
            height: '420px',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <img
            src={base64Image}
            width={400}
            height={420}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>

        {/* Gradient overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            left: '200px',
            top: 0,
            width: '300px',
            height: '420px',
            background: 'linear-gradient(90deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 100%)',
            display: 'flex',
          }}
        />

        {/* Text content - right side */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '400px',
            height: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#1a1a1a',
          }}
        >
          {/* Top ornament */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '30px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #b8956a)',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: 'rgba(184, 149, 106, 0.8)',
                fontSize: '10px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}
            >
              Wedding Invitation
            </span>
            <div
              style={{
                width: '30px',
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
              gap: '10px',
              margin: '5px 0',
            }}
          >
            <span
              style={{
                fontSize: '80px',
                color: '#b8956a',
                fontStyle: 'italic',
                lineHeight: 1,
              }}
            >
              M
            </span>
            <span
              style={{
                fontSize: '24px',
                color: 'rgba(184, 149, 106, 0.45)',
                fontStyle: 'italic',
                marginTop: '20px',
              }}
            >
              &amp;
            </span>
            <span
              style={{
                fontSize: '80px',
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
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '1px',
                background: '#b8956a',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                color: '#e8ddd0',
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}
            >
              Melbin &amp; Nena
            </span>
            <div
              style={{
                width: '20px',
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
              gap: '8px',
              margin: '2px 0 15px',
            }}
          >
            <div
              style={{
                width: '60px',
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
                width: '60px',
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
              gap: '6px',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                color: '#e8ddd0',
                letterSpacing: '3px',
              }}
            >
              31 · 05 · 2026
            </span>
            <span
              style={{
                fontSize: '10px',
                color: 'rgba(184, 149, 106, 0.65)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
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
            top: '15px',
            left: '15px',
            right: '15px',
            bottom: '15px',
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
