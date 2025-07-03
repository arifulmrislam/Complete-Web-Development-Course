import React from 'react';

// conditioner rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     } else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditioner rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//         return <li>Work on: {task}</li>
// }

// conditional rendering option 3: ternary operator
// export default function Todo ({task, isDone}){
//     return (     
//         <li>{isDone ? 'Finish' : 'Work on'} : {task}</li>
//     )
// }

//conditional rendering optional 4: &&
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

//conditional rendering optional 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// } 

//conditional optional rendering 6:
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}