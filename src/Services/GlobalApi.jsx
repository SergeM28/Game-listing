import axios from "axios";

const key = "55bc55c6a3ad46a0982a296c9a6a7792";
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key=' + key);
const getAllGames = axiosCreate.get('/games?key=' + key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id);

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}