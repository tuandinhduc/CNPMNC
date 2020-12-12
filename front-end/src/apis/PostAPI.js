import axios from "axios";

const PostAPI = {
  get: (id) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
  getAll: () => axios.get(`http://localhost:8081/api/all-item`),
  create: (postInfo) =>
    axios.post(`https://jsonplaceholder.typicode.com/users`, postInfo),
};
export default PostAPI;
