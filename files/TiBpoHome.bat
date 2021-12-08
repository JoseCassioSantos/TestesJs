@echo off
title BpoHome
:inicio
mode 75,26
cls
color f0
echo ษอออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออป
echo บฒฒฑฑฑฐฐฐ"     __________   _   __           __                "ฐฐฐฑฑฑฒฒบ
echo บฒฒฑฑฑฐฐฐ"    /_  __/  _/  / | / /__  ____  / /_  ____  ____   "ฐฐฐฑฑฑฒฒบ
echo บฒฒฑฑฑฐฐฐ"     / /  / /   /  |/ / _ \/ __ \/ __ \/ __ \/ __ \  "ฐฐฐฑฑฑฒฒบ
echo บฒฒฑฑฑฐฐฐ"    / / _/ /   / /|  /  __/ /_/ / /_/ / /_/ / /_/ /  "ฐฐฐฑฑฑฒฒบ 
echo บฒฒฑฑฑฐฐฐ"   /_/ /___/  /_/ |_/\___/\____/_.___/ .___/\____/   "ฐฐฐฑฑฑฒฒบ
echo บฒฒฑฑฑฐฐฐ"                                    /_/              "ฐฐฐฑฑฑฒฒบ
echo ฬอออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออน
echo บ                              FERRAMANTAS                              บ
echo ฬอออออออออออออออออออออออออออออออออออหอออออออออออออออออออออออออออออออออออน
echo บ[1]      Conectar VPN              บ [6]      Webserver                บ
echo ฬอออออออออออออออออออออออออออออออออออฮอออออออออออออออออออออออออออออออออออน
echo บ[2]    Colocar no Dominio          บ [7]    Abrir Cmd Adm              บ
echo ฬอออออออออออออออออออออออออออออออออออฮอออออออออออออออออออออออออออออออออออน
echo บ[3]      Gpupdate GPO              บ [8]  Desinstalar Programa         บ
echo ฬอออออออออออออออออออออออออออออออออออฮอออออออออออออออออออออออออออออออออออน
echo บ[4]      Abrir Servicos            บ [9]    Test de Ping               บ
echo ฬอออออออออออออออออออออออออออออออออออฮอออออออออออออออออออออออออออออออออออน
echo บ[5]     Corrigi Services           บ [10]  Agendador de tarefa         บ
echo ฬอออออออออออออออออออออออออออออออออออฮอออออออออออออออออออออออออออออออออออน
echo บ[11]     Adapdores de Rede         บ [x]  Sair           ษออออออออออออออป
echo ศอออออออออออออออออออออออออออออออออออสอออออออออออออออออออออบ By Cassio.S  บ
echo                                                           ศออออออออออออออผ               
echo.
echo.
set /p opcao= Selecione a opcao dejesada:

if %opcao% ==1 goto op1
if %opcao% ==2 goto op2
if %opcao% ==3 goto op3
if %opcao% ==4 goto op4
if %opcao% ==5 goto op5
if %opcao% ==6 goto op6
if %opcao% ==7 goto op7
if %opcao% ==8 goto op8
if %opcao% ==9 goto op9
if %opcao% ==10 goto op10
if %opcao% ==11 goto op11
if %opcao% ==x goto opx
if %opcao% GEQ 12 goto erro 
if %opcao% LSS 1 goto erro 


:op1
"C:\Program Files\OpenVPN\bin\openvpn-gui.exe" --connect COVTSMFW004-UDP4-2195-config.ovpn
goto inicio

:op2
sysdm.cpl
goto inicio

:op3
gpupdate /force /boot
goto inicio

:op4
services.msc
goto inicio

:op5
sc.exe config lanmanworkstation depend= bowser/mrxsmb10/mrxsmb20/nsi
pause
sc.exe config mrxsmb10 start= auto
pause
goto inicio

:op6
start iexplore "http://10.221.242.147/FileServer/Files/Ramais/Atualizacoes/BPOHOME/NET/"

goto inicio

:op7
runas /u:policarpo.quaresma "cmd"
goto inicio

:op8
appwiz.cpl
goto inicio

:op9
ping bpohome.br -t
pause
goto inicio

:op10
taskschd.msc
goto inicio

:op11
ncpa.cpl
goto inicio

goto opx


:opx
exit

:erro
echo Entrada invalida
echo Digite ENTER para continuar.
pause > nul
goto inicio

echo.

pause



