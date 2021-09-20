import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_RAPIDAPI_BASEURL;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoCoins: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    }),
});

export const { useGetCryptoCoinsQuery } = cryptoApi;
