const getItem = key => {
    return JSON.parse(localStorage.getItem(key));
};
const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

const localStoragefunc = {
    getItem,
    setItem,
};

export default localStoragefunc;
