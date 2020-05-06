const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');
const prepareData = require('./prepareData');

ipcMain.on('process-subtitles', (evt, paths) => {
    console.log(paths);
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
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