import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters";
import dataReducer from "./data";

const store = configureStore({
  reducer: { filters: filtersReducer, data: dataReducer },
});

export default store;
