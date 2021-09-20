import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const cryptoNewsHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_NEWS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_NEWS_KEY,
    'x-bingapis-sdk': process.env.REACT_APP_BINGAPI_NEWS_SDK,
};

const baseUrl = process.env.REACT_APP_RAPIDAPI_BINGNEWS_BASEURL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                createRequest(
                    `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
                ),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
