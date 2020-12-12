import axios from "axios";

const PostAPI = {
  signin: (username, password) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
  signup: (username, password) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
  logout: () =>
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, postInfo)
      .then((res) => {
        const persons = res.data;
        console.log(persons);
      }),
};
export default PostAPI;
