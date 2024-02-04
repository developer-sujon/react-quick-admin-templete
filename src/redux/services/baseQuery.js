//External Lib Import
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import ToastMessage from '../../helpers/ToastMessage';
import { setLoading } from '../slice/settingReducer';
import { setLogout } from '../slice/authReducer';

const basefetchBaseQuery = (url) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `http://localhost:6100/api/v1/${url}`,
    prepareHeaders: (headers, { getState }) => {
      const {
        settingReducer: { language },
        authReducer: { accessToken },
      } = getState();

      headers.set('authorization', accessToken ? `Bearer ${accessToken}` : '');
      headers.set('accept-language', language);
      return headers;
    },
  });
  return async (args, api, extraOptions) => {
    api.dispatch(setLoading(true));

    const { error, data } = await baseQuery(args, api, extraOptions);

    if (error) {
      api.dispatch(setLoading(false));

      if (error.status === 401) {
        api.dispatch(setLogout());

        ToastMessage.errorMessage(error.data?.message);
      } else if (error.status === 404 || error.status === 400) {
        ToastMessage.errorMessage(error.data?.message);
      } else {
        ToastMessage.errorMessage('Sorry, Something went wrong');
      }
      return { error: { status: error.status, data: error.data } };
    }

    if (data) {
      api.dispatch(setLoading(false));

      if (data?.message) {
        ToastMessage.successMessage(data.message);
        delete data.message;
      }
      return { data };
    }
  };
};

export default basefetchBaseQuery;
