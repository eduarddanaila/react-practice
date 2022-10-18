import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username, password);
    };
    const deleteField = () => {
        setUsername("")
        setPassword("")
    }

    return (
        <>
            <form onSubmit={printValues}>
                <label> Username:</label>
                <input name="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                    <br />

                <label> Password:   </label>
                <input name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <button>Submit</button>
                <button onClick={deleteField}>reset</button>
            </form>
        </>
    );
}
export default Login;