import backEndApiCall from "./backEndApiCall"

//let data = { current, goal }

export const getGoal = async () => {
    const { data } = await backEndApiCall("GET", "/api/goals");
    return data
  };

  export const updateGoal = async (current, goal) => {
    console.log("djkjflasj",goal);
    return await backEndApiCall("POST", "/goals", {
    current: current,
    goal:   goal
    })
  }
  

//   await db.collection('general').doc('yearly_goals').set(data)
//   return 'object updated';


//   const get = async () => {
//     const goalsRef = await db.collection('general').doc('yearly_goals');
//     const doc = await goalsRef.get();
//     if (!doc.exists) {
//         return new Error('No such document!')
//     } else {
//         const data = await doc.data();
//         return data;
//     }
// };




// const schema = Joi.object({
//   current: Joi.number()
//       .integer()
//       .min(0)
//       .max(1000000)
//       .required(),
//   goal: Joi.number()
//       .integer()
//       .min(0)
//       .max(1000000)
//       .required()

// })