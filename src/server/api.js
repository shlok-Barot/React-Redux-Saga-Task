import axios from "axios";
const Posts = [];

const baseURL = "https://reqres.in/api/users?page=1";
export default {
  getAll: async function () {
    return new Promise((resolve) => {
      axios.get(baseURL).then((response) => {
        const finaldata = response.data.data;
        localStorage.setItem("UserData", finaldata);
        setTimeout(resolve(finaldata), 2000);
      });
    });
  },
  update: async function (data) {
    return new Promise((resolve) => {
      const { id, ...rest } = data;
      const targetIndex = Posts.findIndex((x) => x.id === id);
      if (targetIndex > -1) {
        Posts[targetIndex] = { ...data };
      } else {
        new Error("Failed.");
      }
      setTimeout(resolve(data), 1000);
    });
  },
  delete: async function (id) {
    return new Promise((resolve) => {
      const targetIndex = Posts.findIndex((x) => x.id === id);
      if (targetIndex > -1) Posts.splice(targetIndex, 1);
      else {
        new Error("Failed.");
      }
      setTimeout(resolve({ affected: 1 }), 1000);
    });
  },
};
