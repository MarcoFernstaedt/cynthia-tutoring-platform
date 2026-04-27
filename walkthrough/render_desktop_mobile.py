from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont

try:
    from moviepy import VideoClip, AudioFileClip
except Exception:
    from moviepy.editor import VideoClip, AudioFileClip

base = Path('walkthrough/desktop-mobile-recording')
desktop_img = Image.open(base / 'desktop-full.png').convert('RGB')
mobile_img = Image.open(base / 'mobile-full.png').convert('RGB')
audio_path = base / 'cynthia-desktop-mobile-narration.mp3'
out_path = base / 'cynthia-desktop-mobile-narrated-walkthrough.mp4'

W, H = 1280, 720
BG = (247, 240, 226)
MOBILE_BG = (19, 18, 25)
INK = (42, 29, 22)
ACCENT = (152, 86, 44)
DARK = (28, 22, 18)
SAND = (233, 212, 180)
GREEN = (61, 91, 73)
LIGHT_CARD = (255, 251, 244)

try:
    font_big = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
    font_med = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
    font_small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 16)
except Exception:
    font_big = font_med = font_small = ImageFont.load_default()

def ease(x):
    x = max(0, min(1, x))
    return x * x * (3 - 2 * x)

def draw_header(draw, title, subtitle):
    draw.rounded_rectangle((24, 18, W-24, 76), radius=18, fill=(255, 251, 244), outline=SAND, width=2)
    draw.text((48, 30), title, font=font_big, fill=INK)
    draw.text((48, 58), subtitle, font=font_small, fill=ACCENT)

def desktop_frame(progress):
    canvas = Image.new('RGB', (W, H), BG)
    draw = ImageDraw.Draw(canvas)
    draw_header(draw, 'Desktop walkthrough', 'Full-width review of Cynthia’s Saguaro Blossoms Learning Services site')

    frame_x, frame_y, frame_w, frame_h = 54, 102, 1172, 586
    chrome_h = 34
    viewport_h = frame_h - chrome_h
    max_y = max(0, desktop_img.height - 900)
    y = int(max_y * ease(progress))
    crop = desktop_img.crop((0, y, desktop_img.width, min(y + 900, desktop_img.height)))
    if crop.height < 900:
        padded = Image.new('RGB', (desktop_img.width, 900), (255,255,255))
        padded.paste(crop, (0,0))
        crop = padded
    shot = crop.resize((frame_w, viewport_h), Image.Resampling.LANCZOS)

    draw.rounded_rectangle((frame_x, frame_y, frame_x+frame_w, frame_y+frame_h), radius=18, fill=(36, 30, 26), outline=(96, 70, 50), width=2)
    draw.rounded_rectangle((frame_x+10, frame_y+8, frame_x+frame_w-10, frame_y+chrome_h-4), radius=10, fill=(50, 42, 36))
    for i, c in enumerate([(239,96,86), (245,190,79), (101,198,112)]):
        draw.ellipse((frame_x+26+i*22, frame_y+16, frame_x+38+i*22, frame_y+28), fill=c)
    draw.rounded_rectangle((frame_x+112, frame_y+13, frame_x+frame_w-28, frame_y+29), radius=8, fill=(255,255,255))
    draw.text((frame_x+128, frame_y+13), 'srv1522777.tail72f980.ts.net', font=font_small, fill=(94,77,65))
    canvas.paste(shot, (frame_x, frame_y+chrome_h))
    return canvas

def mobile_frame(progress):
    canvas = Image.new('RGB', (W, H), MOBILE_BG)
    draw = ImageDraw.Draw(canvas)
    draw_header(draw, 'Mobile walkthrough', 'Phone-sized responsive review: stacked sections, readable cards, clear CTA')

    phone_w, phone_h = 390, 664
    scale = 0.83
    disp_w, disp_h = int(phone_w*scale), int(phone_h*scale)
    phone_x, phone_y = 478, 108
    max_y = max(0, mobile_img.height - phone_h)
    y = int(max_y * ease(progress))
    crop = mobile_img.crop((0, y, phone_w, min(y + phone_h, mobile_img.height)))
    if crop.height < phone_h:
        padded = Image.new('RGB', (phone_w, phone_h), (255,255,255))
        padded.paste(crop, (0,0))
        crop = padded
    shot = crop.resize((disp_w, disp_h), Image.Resampling.LANCZOS)

    # Left/right note cards
    for box, text in [
        ((48, 154, 390, 300), 'Mobile keeps the warm brand and headline intact, then stacks every service section into an easy one-column path.'),
        ((900, 360, 1230, 535), 'Pricing, credentials, family rates, ESA timing, and the consultation call-to-action remain accessible on a phone.')
    ]:
        draw.rounded_rectangle(box, radius=18, fill=LIGHT_CARD, outline=SAND, width=2)
        x, y0, x2, _ = box
        words = text.split()
        line = ''
        yy = y0 + 24
        for word in words:
            test = (line + ' ' + word).strip()
            if draw.textlength(test, font=font_med) > (x2-x-42):
                draw.text((x+22, yy), line, font=font_med, fill=GREEN)
                yy += 28
                line = word
            else:
                line = test
        if line:
            draw.text((x+22, yy), line, font=font_med, fill=GREEN)

    outer = (phone_x-18, phone_y-18, phone_x+disp_w+18, phone_y+disp_h+18)
    draw.rounded_rectangle(outer, radius=38, fill=DARK, outline=(88, 70, 57), width=3)
    draw.rounded_rectangle((phone_x-2, phone_y-2, phone_x+disp_w+2, phone_y+disp_h+2), radius=24, fill=(12,12,12))
    canvas.paste(shot, (phone_x, phone_y))
    draw.rounded_rectangle((phone_x+disp_w//2-42, phone_y-11, phone_x+disp_w//2+42, phone_y+3), radius=7, fill=DARK)
    return canvas

audio = AudioFileClip(str(audio_path))
duration = float(audio.duration)
intro_hold = 1.2
desktop_dur = duration * 0.58
mobile_dur = max(1.0, duration - desktop_dur)

def make_frame(t):
    if t < desktop_dur:
        p = t / desktop_dur
        img = desktop_frame(p)
    else:
        p = (t - desktop_dur) / mobile_dur
        img = mobile_frame(p)
    return __import__('numpy').array(img)

clip = VideoClip(make_frame, duration=duration)
clip = clip.with_audio(audio) if hasattr(clip, 'with_audio') else clip.set_audio(audio)
clip.write_videofile(str(out_path), fps=18, codec='libx264', audio_codec='aac', preset='medium', bitrate='2400k', logger=None)
clip.close()
audio.close()
print(out_path.resolve())
