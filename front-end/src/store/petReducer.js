const initialState = {
  petList: [],
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PET":
      const listVaccination = action.payload.listVaccination;
      const newPet = { ...action.payload, listVaccination: listVaccination };
      return {
        ...state,
        petList: [...state.petList, newPet],
      };
    case "UPDATE_PET_LIST":
      return {
        ...state,
        petList: action.payload,
      };
    case "ADD_VACCINATION":
      return {
        ...state,
        petList: state.petList.map((pet) => {
          if (pet.petId === action.payload.petId) {
            const updatedVaccinationList = [
              ...pet.listVaccination,
              action.payload.vaccination,
            ];
            return { ...pet, listVaccination: updatedVaccinationList };
          } else {
            return pet;
          }
        }),
      };
    case "DELETE_VACCINATION":
      return {
        ...state,
        petList: state.petList.map((pet) => {
          if (pet.petId === action.payload.petId) {
            const updatedVaccinationList = pet.listVaccination.filter(
              (vaccination) => vaccination.vacId !== action.payload.vacId
            );
            return { ...pet, listVaccination: updatedVaccinationList };
          } else {
            return pet;
          }
        }),
      };
    default:
      return state;
  }
};

export default petReducer;
