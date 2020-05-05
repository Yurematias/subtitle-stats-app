const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');

ipcMain.on('process-subtitles', (evt, paths) => {
    console.log(paths);
    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            evt.reply('process-subtitles', [
                {name: 'You', amount: 400},
                {name: 'He', amount: 100},
                {name: 'I', amount: 500},
                {name: 'a', amount: 500},
                {name: 'f', amount: 500}
            ]);
        });
});