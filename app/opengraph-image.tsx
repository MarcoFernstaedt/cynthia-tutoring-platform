import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const alt = 'Saguaro Blossoms Learning — Online Tutoring for Every Learner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const petalRotations = [0, 45, 90, 135, 180, 225, 270, 315]

function PreviewFlower({ scale = 1 }: { scale?: number }) {
  const petalWidth = 58 * scale
  const petalHeight = 92 * scale
  const center = 100 * scale

  return (
    <div
      style={{
        position: 'relative',
        width: 200 * scale,
        height: 200 * scale,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {petalRotations.map((rotation, index) => (
        <div
          key={rotation}
          style={{
            position: 'absolute',
            left: center - petalWidth / 2,
            top: 12 * scale,
            width: petalWidth,
            height: petalHeight,
            borderRadius: `${petalWidth / 2}px ${petalWidth / 2}px ${petalWidth / 2}px ${petalWidth / 2}px / ${petalHeight * 0.58}px ${petalHeight * 0.58}px ${petalHeight * 0.42}px ${petalHeight * 0.42}px`,
            background: index % 2 === 0 ? '#D4006A' : '#E8008A',
            opacity: 0.86,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${petalWidth / 2}px ${center - 12 * scale}px`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: center - 39 * scale,
          top: center - 39 * scale,
          width: 78 * scale,
          height: 78 * scale,
          borderRadius: '50%',
          background: '#D4A017',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 11 * scale,
            fontStyle: 'italic',
            lineHeight: 1.35,
          }}
        >
          Every{'\n'}voice
        </span>
      </div>
    </div>
  )
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#FFFBF0',
          position: 'relative',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: 'linear-gradient(180deg, #D4006A 0%, #D4A017 100%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '56px 72px 56px 80px',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#D4006A',
              }}
            />
            <span
              style={{
                fontSize: 14,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3A3A3A',
              }}
            >
              Tucson, Arizona · Virtual Sessions Worldwide
            </span>
          </div>

          <div
            style={{
              fontSize: 68,
              color: '#0D0D0D',
              lineHeight: 1.08,
              marginBottom: 6,
              fontWeight: 400,
            }}
          >
            Saguaro Blossoms
          </div>
          <div
            style={{
              fontSize: 50,
              color: '#D4006A',
              lineHeight: 1.08,
              marginBottom: 28,
              fontStyle: 'italic',
            }}
          >
            Learning
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              borderLeft: '3px solid #F0C84A',
              paddingLeft: 18,
              marginBottom: 36,
            }}
          >
            <span
              style={{
                fontSize: 21,
                fontStyle: 'italic',
                color: '#3A3A3A',
                lineHeight: 1.55,
                maxWidth: 560,
              }}
            >
              Where every learner blossoms at their own pace.
            </span>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Reading', 'Writing', 'ESL', 'Homeschool', 'Adult Learning', 'AZ ESA'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '7px 16px',
                  borderRadius: 100,
                  background: '#FFF0F7',
                  border: '1px solid #FFE0EF',
                  fontSize: 14,
                  color: '#D4006A',
                  fontStyle: 'normal',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: 260,
            background: '#FFF0F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <PreviewFlower />
        </div>
      </div>
    ),
    { ...size },
  )
}
