export const selectContacts = state => state.contacts.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectError = state => state.contacts.contacts.error;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectToken = state => state.user.token;

export const selectUserError = state => state.user.error;

export const selectUserName = state => state.user.user.name;

export const selectUserIsLoading = state => state.user.isLoading;
