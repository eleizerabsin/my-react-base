import { createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk("example/getData", (arg) => {
    return fetch(arg)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(json => json);
});

export {
    getData
}