export const addPet = (pet) => {
  return {
    type: "ADD_PET",
    payload: pet,
  };
};

// export const addPetList = (petId, pet, vaccinationList) => {
//   return {
//     type: "ADD_PET_LIST",
//     payload: {
//       petId,
//       pet,
//       vaccinationList,
//     },
//   };
// };
export const updatePetList = (petList) => ({
  type: "UPDATE_PET_LIST",
  payload: petList,
});

export const addVaccination = (petId, vaccination) => {
  return {
    type: "ADD_VACCINATION",
    payload: {
      petId,
      vaccination,
    },
  };
};

export const deleteVaccination = (petId, vacId) => {
  return {
    type: "DELETE_VACCINATION",
    payload: {
      petId,
      vacId,
    },
  };
};
