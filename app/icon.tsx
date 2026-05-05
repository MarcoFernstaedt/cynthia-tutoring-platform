import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#FFF0F7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 30,
            height: 30,
          }}
        >
          {rotations.map((rotation, index) => (
            <div
              key={rotation}
              style={{
                position: 'absolute',
                left: 10.5,
                top: 1.5,
                width: 9,
                height: 14,
                borderRadius: '5px 5px 5px 5px / 8px 8px 6px 6px',
                background: index % 2 === 0 ? '#D4006A' : '#E8008A',
                opacity: 0.9,
                transform: `rotate(${rotation}deg)`,
                transformOrigin: '4.5px 13.5px',
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              left: 10,
              top: 10,
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#D4A017',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
