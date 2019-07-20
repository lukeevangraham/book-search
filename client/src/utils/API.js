import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  search: function(query) {
    // console.log("query is: ", query)
    // console.log(axios.get(BASEURL + query))
    return axios.get(BASEURL + query);
  },

  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
};
