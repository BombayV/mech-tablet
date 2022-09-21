fx_version 'cerulean'
game 'gta5'
lua54 'yes'
use_fxv2_oal 'yes'

author 'Bombay'
description 'A simple mechanic tablet which modernized UI and unique features.'
version '0.0.1'

client_script 'resources/dist/client/client.js'
server_script 'resources/dist/server/server.js'

ui_page 'http://127.0.0.1:5173/'
files {
	'config.json',
	'resources/html/index.html',
	'resources/html/**/*',
}