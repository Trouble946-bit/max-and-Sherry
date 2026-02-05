@echo off
cd /d "c:\Users\Fa\Documents\Anenenji\Programming\grace-bites\mobile-app"
echo.
echo ======================================
echo   GRACE BITES - EXPO GO TESTING
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
