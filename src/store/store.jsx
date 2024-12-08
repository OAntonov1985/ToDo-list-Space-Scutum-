import { configureStore } from "@reduxjs/toolkit";
import userData from "./userSclise";

export function makeStore() {
    return configureStore({
        reducer: {
            userData: userData,
        },
    });
}

export const store = makeStore();