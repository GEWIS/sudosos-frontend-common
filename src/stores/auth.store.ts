import { defineStore } from 'pinia';
import {
  GEWISAuthenticationPinRequest,
  UserResponse
} from "@sudosos/sudosos-client";
import ApiService from "../services/ApiService";
import {useUserStore} from "./user.store";

interface AuthStoreState {
  user: UserResponse | null,
  roles: string[],
  organs: UserResponse[],
  token: string | null,
  acceptedToS: string | null,
}
export const useAuthStore = (service: ApiService) => defineStore({
  id: 'auth',
  state: (): AuthStoreState => ({
    user: null,
    roles: [],
    token: null,
    organs: [],
    acceptedToS: null,
  }),
  getters: {
    getToken: (state) => (): string | null => {
      return state.token;
    },
    getToS: (state) => (): string | null => {
      return state.acceptedToS;
    },
    getUser: (state) => (): UserResponse | null => {
      return state.user;
    }
  },
  actions: {
    async pinlogin(userId: string, pinCode: string) {
      const userDetails: GEWISAuthenticationPinRequest = {
        gewisId: parseInt(userId, 10),
        pin: pinCode,
      };

      await service.authenticate.gewisPinAuthentication(userDetails).then((res) => {
        const { user, token, roles,organs, acceptedToS} = res.data;
        this.user = user;
        this.token = token;
        this.roles = roles;
        this.organs = organs;
        this.acceptedToS = acceptedToS;
        service.user.getIndividualUser(this.user.id).then((res) => {
          (useUserStore(service)).setCurrentUser(res.data)
        })
      })
    },
    logout() {
      this.user = null;
    }
  }
});