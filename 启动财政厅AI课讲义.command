#!/bin/bash
# 江苏财政厅 AI 课 · 交互讲义 一键启动器
# 双击运行：自动启动本地服务并在浏览器打开讲义；关闭此终端窗口即停止服务。

cd "$(dirname "$0")/app" || exit 1

# 找一个可用端口（优先 7100）
PORT=""
for p in 7100 7101 7102 7103; do
  if ! lsof -ti :$p >/dev/null 2>&1; then
    PORT=$p
    break
  fi
done
if [ -z "$PORT" ]; then
  echo "端口 7100–7103 都被占用，请关闭占用程序后重试。"
  read -r -p "按回车退出..."
  exit 1
fi

echo "启动本地服务（端口 $PORT）..."
python3 -m http.server $PORT --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!

# 等服务就绪
for i in $(seq 1 30); do
  if curl -s -o /dev/null "http://127.0.0.1:$PORT/"; then
    break
  fi
  sleep 0.3
done

echo ""
echo "  讲义地址：http://127.0.0.1:$PORT/"
echo "  正在打开浏览器..."
open "http://127.0.0.1:$PORT/"

echo ""
echo "───────────────────────────────────────"
echo "  使用期间请勿关闭本窗口。"
echo "  关闭窗口或按 Ctrl+C 即停止服务。"
echo "───────────────────────────────────────"

# 窗口关闭或 Ctrl+C 时清理服务进程
trap "kill $SERVER_PID 2>/dev/null; exit 0" INT TERM HUP
wait $SERVER_PID
