import { configureStore } from "@reduxjs/toolkit";
import { portfolioApi } from "./services";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./features/appSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    app: appReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
