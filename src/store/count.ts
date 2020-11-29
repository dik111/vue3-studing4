import {Action,Mutation} from "vuex";
interface StateType {
    [propName:string]:any
}

interface CountType {
    namespaced:boolean,
    state:StateType,
    actions:{
        increment:Action<any, any>
    },
    mutations:{
        add:Mutation<any>
    }
}
const count:CountType = {
    namespaced: true,
    state:{
        n:0
    },
    actions: {
        increment({commit},payload){
            commit({
                type:'add',payload
            })
        }
    },
    mutations:{
        add(state,{payload}){
            state.n += payload
        }
    }
}
export default count
