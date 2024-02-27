// export default function Todo({task,isDone}){
//     // task = 'Hey bro I change the it';
//     return(
//         <>
//             <li>Task: {task}{isDone}</li>
//         </>
//     )
// }

// //conditional rendering option1
// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Work On: {task}</li>
//     }
// }

//conditional rendering option2
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>;
//     }else{
//         return <li>Work On: {task}</li>
//     }
// }


//conditional rendering option3: ternary operator
// export default function Todo({task,isDone}){
//     return(
//             <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }


//conditional rendering option 4: &&
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}{isDone && ': Done'}</li>
//     )
// }

// //conditional rendering option 5: ||
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}{isDone || ': Do it'}</li>
//     )
// }

//conditional rendering option 6
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}