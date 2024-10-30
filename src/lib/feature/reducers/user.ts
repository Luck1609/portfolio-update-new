import { User } from "@/hooks/use-auth";
import { createSlice } from "@reduxjs/toolkit";



interface InitialState {
  user: User | null;
  isLoading: boolean
}

const initialState: InitialState = {
  user: null,
  isLoading: true
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    authUser: (state, { payload }: {payload: User}) => {
      state.user = !payload ? initialState.user : payload
    },

    userLoading: (state, {payload}: {payload: boolean}) => {
      state.isLoading = payload
    }
  },
});

export const { actions, reducer } = UserReducer;

export const { authUser, userLoading } = actions;

export default reducer;
