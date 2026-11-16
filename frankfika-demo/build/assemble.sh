#!/bin/bash
# Assemble the frankfika product demo (Silicon Valley style).
# Footage was recorded live from https://www.frankfika.com with Playwright.
# Title cards are HTML/CSS motion graphics rendered frame-by-frame.
# Music: "Crypto" by Kevin MacLeod (CC BY 4.0, incompetech.com).
set -euo pipefail

ROOT="$HOME/Desktop/Jiangsu Finance/frankfika-demo"
WORK="$ROOT/build/work"
OUT="$ROOT/out"
TMP="$ROOT/build/tmp"
mkdir -p "$WORK" "$OUT" "$TMP"

W=1920; H=1080; FPS=30
V="scale=${W}:${H}:force_original_aspect_ratio=decrease,pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=0x05070a,fps=${FPS},format=yuv420p"

# Ken Burns: slow push-in / drift so static screen captures feel alive.
KB_IN="zoompan=z='min(zoom+0.00035,1.10)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${W}x${H}:fps=${FPS}"
KB_OUT="zoompan=z='if(lte(zoom,1.0),1.10,max(1.001,zoom-0.00035))':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${W}x${H}:fps=${FPS}"

seg () {  # seg <name> <src> <start> <dur> [mode: none|kb_in|kb_out]
  local name="$1" src="$2" start="$3" dur="$4" mode="${5:-none}"
  local vf="$V"
  case "$mode" in
    kb_in)  vf="$vf,$KB_IN" ;;
    kb_out) vf="$vf,$KB_OUT" ;;
  esac
  ffmpeg -y -v error -ss "$start" -t "$dur" -i "$WORK/${src}.mp4" \
    -vf "$vf" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -an "$TMP/$name.mp4"
  echo "  seg $name (${dur}s, $mode)"
}

echo "== building segments =="

seg 01_title        card_01-title      0.0  5.5
seg 02_hero         A_hero_norm        4.8  4.6 kb_in
seg 03_chat         B_chat_norm        4.0  6.2 kb_in
seg 04_features     card_02-features   0.0  5.2
seg 05_resume       C_resume_norm      3.5  7.0 kb_out
seg 06_match_intro  D_match_intro_norm 4.0  5.5 kb_in
seg 07_match_card   card_03-match      0.0  5.2
seg 08_fate         E_fate_norm        8.0  6.0 kb_in
seg 09_match_result F_match_result_norm 87.0 9.0 kb_in
seg 10_stack        card_04-stack      0.0  5.2
seg 11_chips        G_chips_norm       7.5  4.0 kb_in
seg 12_en           H_en_norm          8.0  5.0 kb_out
seg 13_outro        card_05-outro      0.0  5.5

echo "== concatenating =="
: > "$TMP/list.txt"
for s in 01_title 02_hero 03_chat 04_features 05_resume 06_match_intro \
         07_match_card 08_fate 09_match_result 10_stack 11_chips 12_en 13_outro; do
  echo "file '$TMP/$s.mp4'" >> "$TMP/list.txt"
done
ffmpeg -y -v error -f concat -safe 0 -i "$TMP/list.txt" \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p "$WORK/silent.mp4"

TOTAL=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$WORK/silent.mp4")
echo "video duration: ${TOTAL}s"

echo "== music =="
ffmpeg -y -v error -i /tmp/t2_Crypto.mp3 -t "$TOTAL" -af \
  "volume=0.32,afade=t=in:st=0:d=2,afade=t=out:st=$(python3 -c "print(max(0,float('$TOTAL')-3))"):d=3" \
  -ar 48000 -ac 2 "$WORK/music.wav"
ffmpeg -y -v error -i "$WORK/music.wav" -af "loudnorm=I=-16:TP=-1.5:LRA=11" "$WORK/music_norm.wav"

echo "== muxing =="
ffmpeg -y -v error -i "$WORK/silent.mp4" -i "$WORK/music_norm.wav" \
  -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -c:a aac -b:a 192k \
  -movflags +faststart -shortest "$OUT/frankfika-demo.mp4"

ls -la "$OUT/"
