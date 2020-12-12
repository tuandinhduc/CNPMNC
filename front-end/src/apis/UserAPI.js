import axios from "axios";

const PostAPI = {
  signin: (username, password) =>
    axios.post(`http://192.168.137.74:8081/api/login`, {
      email: username,
      password: password,
    }),
  signup: (username, password) =>
    axios.post(`http://192.168.137.74:8081/api/modify-account`, {
      name: "admin",
      email: username,
      password: password,
    }),
  logout: () =>
    axios.post(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
};
export default PostAPI;
