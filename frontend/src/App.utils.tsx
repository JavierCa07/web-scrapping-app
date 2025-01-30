const estimationStrings = [
    "It can take a few seconds...",
    "It can take some minutes...",
    "It can take a long time..."
];

const splitStringByWords = (str: string) => {
    return str.split(/[,.]/).filter(part => part.trim() !== '').filter(chunk => chunk.trim().split(" ").length > 1);
  }

// time estimation calculation:
// based on the query text, we calculate the time estimation based on the number of chunks
// these chunks are created by splitting the string by the characters: , .
// approximately the time required depends on the number of chunks because we do a search for each chunk
export const getTimeEstimationString = (query: string) => {
    const TIME_PER_CHUNK_IN_SECONDS = 20; // aproximation
    const numberOfChunks = splitStringByWords(query).length;
    const time = numberOfChunks * TIME_PER_CHUNK_IN_SECONDS;
    if (time === 20) { // if time is 20sec, no message
        return "";
    } else if (time > 20 && time <= 60) { // if time is between 20 and 60sec
        return estimationStrings[0];
    } else if (time <= 120) { // if time is between 60 and 120sec
        return estimationStrings[1];
    } else {
        return estimationStrings[2]; // if time is greater than 120sec
    }
};