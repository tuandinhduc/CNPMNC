import axios from "axios";

const PostAPI = {
  get: (id) => axios.get(`http://192.168.137.74:8081/api/item/${id}`),
  getAll: () => axios.get(`http://192.168.137.74:8081/api/all-item`),
  create: (postInfo) =>
    axios.post(`http://192.168.137.74:8081/api/modify-item`, postInfo),
};
export default PostAPI;
