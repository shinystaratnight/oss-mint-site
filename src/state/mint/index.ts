/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SerializedMintPublicData,
  SerializedMintState,
  SerializedMintUserData,
} from "state/types";
import fetchMintPublicData from "./fetchMintPublicData";
import fetchMintUserData from "./fetchMintUserData";

export const initialState: SerializedMintState = {
  publicData: {
    goldenMintStartAt: 0,
    goldenMintEndAt: 0,
    goldenMaxSupply: 1000,
    goldenSupply: 0,
    goldenPrice: "0",
    silverMintStartAt: 0,
    silverMintEndAt: 0,
    silverMaxSupply: 2500,
    silverSupply: 0,
    silverPrice: "0",
    commonMintStartAt: 0,
    commonMintEndAt: 0,
    commonMaxSupply: 10000,
    commonSupply: 0,
    commonPrice: "0",
    totalSupply: 0,
  },
  userData: {
    nfts: [],
    ethBalance: "0",
  },
};

export const fetchMintPublicDataAsync =
  createAsyncThunk<SerializedMintPublicData>(
    "mint/fetchMintPublicDataAsync",
    async () => {
      const data = await fetchMintPublicData();
      return data;
    }
  );

export const fetchMintUserDataAsync = createAsyncThunk<
  SerializedMintUserData,
  { account: string }
>("mint/fetchMintUserDataAsync", async ({ account }) => {
  const data = await fetchMintUserData(account);
  return data;
});

export const MintSlice = createSlice({
  name: "Mint",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMintPublicDataAsync.fulfilled, (state, action) => {
        state.publicData = action.payload;
      })
      .addCase(fetchMintUserDataAsync.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export default MintSlice.reducer;
