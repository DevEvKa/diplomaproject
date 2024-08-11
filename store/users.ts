import { defineStore } from 'pinia'

import { type IUser } from '~/types/users';

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    users: [] as IUser[] | [],
  }),
  actions: {
    async getAllUsers() {
      const usersData = await $fetch<IUser[]>('https://jsonplaceholder.typicode.com/users')
      this.users = usersData;
    }
  }
})

