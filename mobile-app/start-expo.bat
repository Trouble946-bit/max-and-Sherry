@echo off
cd /d "c:\Users\Fa\Documents\Anenenji\Programming\max-and-sherry\mobile-app"
echo.
echo ======================================
echo   MAX AND SHERRY - EXPO GO TESTING
echo ======================================
echo.
echo Starting Expo Dev Server...
echo.
call node_modules\.bin\expo.cmd start
echo.
echo If QR code doesn't appear, press Ctrl+C and run:
echo   node_modules\.bin\expo.cmd start
echo.
pause
