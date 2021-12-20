import { createSelector } from 'reselect';

import { RootState } from '../../storage/persist';

const selectProfile = (store: RootState) => store.user;

export const selectToken = createSelector(
  selectProfile,
  (profile) => profile.accessToken,
);

export const selectAuth = createSelector(
  selectProfile,
  (profile) => profile.isAuthorized,
);
