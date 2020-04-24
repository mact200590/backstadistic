import rooms from './roomsResolver';
const data = [
  {
      id:2,
      id_hostal:1,
      name:'hostalcabriales',
      capacity:5,
  },
  {
      id:3,
      id_hostal:1,
      name:'hostalcabriales',
      capacity:5,
  },
];


export const resolvers={
  Query:{
      rooms:()=>data
  }
};