export const state = {
    title: 'My App',
    users: {
        1: {
            id: 1,
            name: "Lucas Albano",
            company: "Fulcrum Software Solutions",
            files: {
                1: {
                    id: 1,
                    name: "Tax return 2019",
                    created_at: "12/1/20",
                    updated_at: "12/1/20"
                },
                2: {
                    id: 2,
                    name: "Tax return 2020",
                    created_at: "12/1/20",
                    updated_at: "12/1/20"
                }
            }
        }
    },
    userList: state => Object.values(state.users)
}