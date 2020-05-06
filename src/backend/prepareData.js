module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce((fullText, row) => `${fullText} ${row}`)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"',''))
            resolve(words);
        } catch (error) {
            reject(error);
        }
    });
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim());
    const notEmpty = !!row.trim();
    const notInterval = !row.includes('-->');
    return notEmpty && notNumber && notInterval;
}

function removePunctuation(row) {
    return row.replace(/[,?!.-]/g, '')
}

function removeTags(row) {
    return row.replace(/(<[^>]+)>/ig, '').trim(); 
}
