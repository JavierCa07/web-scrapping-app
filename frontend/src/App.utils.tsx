const stopWords = [
    ',',
    '.'
];

const estimationStrings = [
    "It can take a few seconds...",
    "It can take some minutes...",
    "It can take a long time..."
];

const splitStringByWords = (str, words) => {
    const escapedWords = words.map(word => word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');
    
    return str.split(pattern).filter(part => part.trim() !== '').filter(chunk => chunk.trim().split(" ").length > 1);
  }

export const getTimeEstimationString = (query: string) => {
    const TIME_PER_CHUNK_IN_SECONDS = 20; // aproximation
    const numberOfChunks = splitStringByWords(query, stopWords).length;
    const time = numberOfChunks * TIME_PER_CHUNK_IN_SECONDS;
    if (time === 20) {
        return "";
    } else if (time > 20 && time <= 60) {
        return estimationStrings[0];
    } else if (time <= 120) {
        return estimationStrings[1];
    } else {
        return estimationStrings[2];
    }
};