import {IAuthState} from "@/store/auth/auth.state";

export const setUserData = (state: IAuthState, val: string) => {
    state.uid = val;
}