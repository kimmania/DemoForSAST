const fetchData = () => {
   setTimeout(() => {
        const data = Math.random();
        return data; //Incorrect handling of asynchronous callback
   }, 1000);
};

module.exports = fetchData;