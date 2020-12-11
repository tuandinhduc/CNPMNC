import axios from "axios";

const PostAPI = {
  get: (id) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
  getAll: () =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
  create: (postInfo) =>
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, postInfo)
      .then((res) => {
        const persons = res.data;
        console.log(persons);
      }),
};
export default PostAPI;
