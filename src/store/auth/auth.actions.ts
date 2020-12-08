import {ActionContext} from "vuex";
import { googleLogin } from "@/firebase";

export const login = async ({ commit }: ActionContext<any, any>) => {
    const result = await googleLogin();

    commit('setUserData', result.user?.uid)
}