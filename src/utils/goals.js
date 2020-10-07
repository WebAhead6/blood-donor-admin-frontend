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
  
