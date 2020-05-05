const { ipcMain } = require('electron');

ipcMain.on('blabla', (evt, arg) => {
    console.log(arg);
    evt.reply('blabla', 'pong');
});