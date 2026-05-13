import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #1a1a1a, #2d2520)',
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <span
            style={{
              fontSize: '52px',
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
              fontSize: '20px',
              color: 'rgba(184, 149, 106, 0.5)',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              marginTop: '8px',
            }}
          >
            &
          </span>
          <span
            style={{
              fontSize: '52px',
              color: '#b8956a',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            N
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
