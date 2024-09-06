import { defineStore } from 'pinia'

//import { type IUser } from '~/types/users';

export const useTasksStore = defineStore('tasksStore', {
  state: () => ({
  tasksItems: [
    {
      id: 1,
      rule: {
        title: 'Признаки предложения',
        text: `<h4>Можно выделить следующие признаки предложения:</h4><ul><li>слова в предложении связаны по смыслу;</li><li>предложение выражает законченную мысль;</li><li>предложение имеет грамматическую основу;</li>
          <li>в конце предложения ставится знак препинания.</li></ul>`
      },
      task: {
        type: 'choise',
        title: 'Отметь все варианты, в которых есть предложения.',
        items: [
          {
            id: 1,
            mark: 'wrong',
            text: 'снежинка'
          },
          {
            id: 2,
            mark: 'right',
            text: 'У кошки родились котята.'
          },
          {
            id: 3,
            mark: 'wrong',
            text: 'в лесу'
          },
          {
            id: 4,
            mark: 'right',
            text: 'Уходи-ка ты домой, да лицо своё умой!'
          },
          {
            id: 5,
            mark: 'right',
            text: 'Дети читают книгу.'
          },
          {
            id: 6,
            mark: 'right',
            text: 'Идёт снег.'
          },
          {
            id: 7,
            mark: 'wrong',
            text: 'Голубое блюдце'
          },
          {
            id: 8,
            mark: 'wrong',
            text: 'корабль спать прямо'
          },
          {
            id: 9,
            mark: 'right',
            text: 'Куда вы пропали?'
          },
          {
            id: 10,
            mark: 'wrong',
            text: 'розы и ромашки'
          },
          {
            id: 11,
            mark: 'wrong',
            text: 'по-летнему'
          },
        ],
      }
    },
    ],
  }),
})