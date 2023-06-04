// const redux=require('redux')

// const createStore=redux.createStore

// const initialState={
//     count:10
// }
// const placeOrder=()=>
// {
//     return {
//         type:'item_orderd',
//         qty:1
//     }
// }

// const reducer=(state=initialState,action)=>
// {
//     switch(action.type)
//     {
//         case 'item_orderd':
//             return {...state,count:state.count-action.qty}
//         default:
//             return state 
//     }

// }
// const store=createStore(reducer)
// console.log(store.getState());
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(placeOrder())
// store.dispatch(placeOrder())
// store.dispatch(placeOrder())


const redux=require('redux')

const createStore=redux.createStore
const initialState={
    item: [
        {
            name: 'a',
            qty: 10
        },
        {
            name: 'b',
            qty: 20
        },
        {
            name: 'c',
            qty: 30
        }
    ]
}
const store=createStore((state=initialState,action)=>{
    switch(action.type)
    {
        case 'placed':
            let items=state.item.map(e=>{
                return e.name==action.item?{...e,qty:e.qty-action.qty}:e
            })
            return {...state,item:items}
    }
})

store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({
    type:'placed',
    item:'a',
    qty:5
})
store.dispatch({
    type:'placed',
    item:'b',
    qty:15
})
store.dispatch({
    type:'placed',
    item:'c',
    qty:25
})