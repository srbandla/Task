
const initialState = {
    history: [],
    details:[
        {name:'Ramesh',addr:'Banglore',phno:984801234, id:1 },
        {name:'Surendran',addr:'Mumbai',phno:984878962, id:2 },
        {name:'Srikanth',addr:'Kolkata',phno:9848252525, id:3 },
        {name:'Mahesh',addr:'Hyderabad',phno:984875236, id:4 },
        {name:'Krishna',addr:'Delhi',phno:985475221, id:5 },
    ]
}

const Reducer = (state = initialState, action) =>{
    const newState = {...state};
 
    switch(action.type){
    
        case 'SELECT':

    //     var newobj = {
    //         ...state 
    // }
    // newobj.history = state.details.filter( el => el.id == action.key);
    // console.log(newobj)
    //     return newobj   
        return{
            ...state,      
            
            history:state.details.filter( el => el.id == action.key),
            
        }
        break;
    }

    return newState;

}

export default Reducer;