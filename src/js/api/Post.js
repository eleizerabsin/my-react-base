import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getData = createAsyncThunk("example/getData", (arg) => {
    return axios.get(arg)
      .then(response => {
        if (response.status !== 200) throw Error(response.statusText);
        return response.data;
      })
});

export {
    getData
}