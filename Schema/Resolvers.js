const {users}=require("../fakeData");

const resolvers={
Query:{
    getAllUsers(){
        return users
    },
},
};

module.exports={resolvers};