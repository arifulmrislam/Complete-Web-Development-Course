import useInputState from '../Hooks/useInputState';

const HookForm = () => {
  // const [name, handleNameChange] = useInputState('Rojoni rate');
  const emailState = useInputState('rojoni@sojoni.go');

  const handleSubmit = (e) => {
    console.log('form data', emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type='text' name='name' /> */}
        <br />
        <input {...emailState} type='text' name='email' id='' />
        <br />
        <input type='password' name='password' id='' />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default HookForm;
