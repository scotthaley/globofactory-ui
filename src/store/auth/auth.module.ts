import state, {IAuthState} from "@/store/auth/auth.state";
import * as mutations from './auth.mutations';
import * as actions from './auth.actions';

export default {
    state: (): IAuthState => ({
        ...state
    }),
    namespaced: true,
    mutations,
    actions
}