import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
//     const handleSingUpSubmit = data =>{
//         console.log('sign up data', data);
//     }
// 
//     const handleUpdateProfile = data => {
//         console.log('update profile', data)
//     }

    return (
        <>
            <h1>Form Master</h1>
            {/* <SimpleForm></SimpleForm> */}
            {/* <StatefulForm></StatefulForm> */}
            {/* <RefForm></RefForm> */}
            {/* <HookForm></HookForm> */}
            {/* <ReusableForm 
            formTitle={'Sign up'} 
            handleSubmit={handleSingUpSubmit}>
                <div>
                    <h2>Sign Up</h2>
                    <h2>Please sign up right now</h2>
                </div>
            </ReusableForm>
            <ReusableForm 
            formTitle={'Profile Update'}            
            handleSubmit={handleUpdateProfile} 
            submitBtnText='Update'>
                <div>
                    <h2>Update Profile</h2>
                    <p>Always keep profile updated</p>
                </div>
            </ReusableForm> */}
            <GrandPa></GrandPa>
        </>
    )
}

export default App
