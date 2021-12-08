regedit -s "C:\Reg_Avaya\ipagent_config_localidade.reg"
regedit -s "C:\Reg_Avaya\ipagent_config_mdb.reg"
regedit -s "C:\Reg_Avaya\ipagent_config_network.reg"
regedit -s "C:\Reg_Avaya\ipagent_config_autologin.reg"

:: ====== Configura Registro Net ======
regedit -s C:\registry.reg
regedit -s "C:\Reg_Avaya\LiberaOpcoesIPAgent7.reg"
regedit -s "C:\Reg_Avaya\bloq_ramal_senha_full.reg"
regedit -s "C:\Reg_Avaya\desbloqueia_audio_IPAgent7.reg"
regedit -s "C:\Reg_Avaya\Somavaya_USB.reg"
regedit -s "C:\Reg_Avaya\AvayaIPAgent_Ring_Options.reg"
regedit -s "C:\Reg_Avaya\Avaya_bloqueio_motivopausa.reg"
regedit -s "C:\Reg_Avaya\FIXMensageiro.reg"
regedit -s "C:\Reg_Avaya\DDMMAAAA.reg"
regedit -s "C:\Reg_Avaya\Ie.reg"
regedit -s "C:\Reg_Avaya\Sem_Som.reg"
regedit -s "C:\Reg_Avaya\IE_Default_Browser.reg"
regedit -s "C:\Reg_Avaya\opcoes_nao_salva_senha_avaya.reg"
regedit -s "C:\Reg_Avaya\C-Media_Headphone.reg"
regedit -s "C:\Reg_Avaya\Viewer_PPT.reg"
regedit -s "C:\Reg_Avaya\9Digito.reg"
regedit -s "C:\Reg_Avaya\AdobeUPD.reg"
regedit -s "C:\Reg_Avaya\bloq_opcoes_ipagent7.reg"

REG ADD HKCU\Software\Avaya\iClarity\Options /v AutoLogin /t REG_DWORD /d "00000001"

REG ADD HKCU\Software\Avaya\iClarity\Options /v DontShowLoginStatus /t REG_DWORD /d "00000001"

REG ADD HKCU\Software\Avaya\iClarity\Options /v NetworkBandwidth /t REG_DWORD /d "00000004"

REG ADD HKCU\Software\Avaya\iClarity\Options /v SavePassword /t REG_DWORD /d "00000001"

REG ADD HKCU\Software\Avaya\iClarity\Options /v ShowTip /t REG_DWORD /d "00000000"


