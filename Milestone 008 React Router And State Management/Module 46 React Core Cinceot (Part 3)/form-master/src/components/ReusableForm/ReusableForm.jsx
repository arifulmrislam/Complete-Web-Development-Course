

const ReusableForm = ({formTitle, submitBtnText='Submit', handleSubmit, children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name'/>
                <br/>
                <input type='text' name='email' id=''/>
                <br/>
                <input type='password' name='password' id=''/>
                <br/>
                <input type='submit' value={submitBtnText}/>
            </form>
        </div>
    );
};

export default ReusableForm;