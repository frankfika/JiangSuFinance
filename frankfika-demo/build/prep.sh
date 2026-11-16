#!/bin/bash
# Assemble the frankfika product demo.
#   1. normalise every clip to 1920x1080 / 30fps / h264
#   2. trim to the chosen moments
#   3. render the title-card PNG sequences to video
#   4. concat everything with the music bed
set -euo pipefail

ROOT="$HOME/Desktop/Jiangsu Finance/frankfika-demo"
SHOTS="$ROOT/shots"
CARDS="$ROOT/assets"
WORK="$ROOT/build/work"
OUT="$ROOT/out"
mkdir -p "$WORK" "$OUT"

W=1920; H=1080; FPS=30
NORM="scale=${W}:${H}:force_original_aspect_ratio=decrease,pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=0x05070a,fps=${FPS},format=yuv420p"

# --- 1. normalise the screen recordings -------------------------------------
for f in "$SHOTS"/*.webm; do
  n=$(basename "$f" .webm)
  ffmpeg -y -v error -i "$f" -vf "$NORM" -c:v libx264 -preset medium -crf 18 \
    -an "$WORK/${n}_norm.mp4"
  echo "norm $n"
done

# --- 2. render the motion-graphics cards ------------------------------------
for d in "$CARDS"/*/; do
  n=$(basename "$d")
  ffmpeg -y -v error -framerate $FPS -i "$d/f%05d.png" \
    -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p "$WORK/card_${n}.mp4"
  echo "card $n"
done
echo "work dir ready"
