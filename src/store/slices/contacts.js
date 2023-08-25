import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserList = createAsyncThunk(
  "contacts/getUserList",
  async () => {
    const resp = await fetch("https://reqres.in/api/users");
    const data = await resp.json();
    console.log(data);
    return data.data;
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    userList: [],
    loading: true,
  },
  reducers: {
    setList: (state, action) => {
      state.userList = action.payload;
    },
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    removeUser: (state, action) => {
      state.userList.splice(state.userList.indexOf(action.payload), 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.userList = action.payload;
      state.loading = false;
    });
  },
});

export const { setList, addUser, removeUse } = contactsSlice.actions;

export default contactsSlice.reducer;
