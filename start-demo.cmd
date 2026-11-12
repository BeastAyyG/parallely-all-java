@echo off
setlocal
cd /d "%~dp0"

set "JAR=server\target\apex-engine.jar"

if not exist "%JAR%" (
  echo Building the server jar with the Maven wrapper ...
  call mvnw.cmd -q package
  if errorlevel 1 (
    echo Build failed. Press any key to exit.
    pause >nul
    exit /b 1
  )
)

rem Clear the loopback HTTP proxy variables. Both server windows inherit these.
set "HTTP_PROXY="
set "HTTPS_PROXY="
set "http_proxy="
set "https_proxy="
set "NO_PROXY=127.0.0.1,localhost"
set "no_proxy=127.0.0.1,localhost"

start "PARALLELY server" /min cmd /c "java -cp server\target\apex-engine.jar com.apex.whiteboard.WhiteboardServer 8090"
rem jwebserver needs an absolute -d; /d puts the child directly in web.
start "PARALLELY web" /d "%~dp0web" /min cmd /c "jwebserver -p 3000 -b 0.0.0.0"

echo.
echo  ======================================================================
echo   PARALLELY - all-Java collaborative whiteboard
echo.
echo    Open in your browser:   http://localhost:3000
echo    Java WebSocket server:  ws://localhost:8090/ws/whiteboard
echo.
echo   Both servers run in minimized windows. Close those windows to stop.
echo  ======================================================================
echo.
pause
