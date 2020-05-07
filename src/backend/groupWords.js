module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            const groupedWords = words.reduce((obj, word) => {
                if (obj[word]) {
                    obj[word] = obj[word] + 1;
                } else {
                    obj[word] = 1;
                }
                return obj;
            }, {});
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key]}))
                .sort((current, next) => next.amount - current.amount);
            resolve(groupedWordsArray);
        } catch (error) {
            reject(error);
        }
    })
}