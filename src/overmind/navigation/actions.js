export const setPage = ({state, effects, actions}, value) => {
    state.navigation.currentPage = value;
}