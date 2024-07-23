import React from 'react';


const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [messages, setMessages] = React.useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic
        // Example: handle login via API
        // handleLogin(username, password).then(response => setMessages(response.messages));
    };

    return (
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                {/* Login Info */}
                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href="" className="-intro-x flex items-center pt-5">
                        <img alt="Logo" className="w-6" src="/path-to-your-images/logo.png" style={{ width: '150px' }} />
                        {/* <span className="text-white text-lg ml-3"> Rubick </span> */}
                    </a>
                    <div className="my-auto">
                        <img alt="Illustration" className="-intro-x w-1/2 -mt-16" src="/path-to-your-images/illustration.svg" />
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            A few more clicks to 
                            <br />
                            sign in to your account.
                        </div>
                        <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Manage your business at one place</div>
                    </div>
                </div>
                {/* Login Form */}
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Sign In
                        </h2>
                        <form onSubmit={handleSubmit}>
                            {/* CSRF token handling is not necessary in React, it is handled by backend APIs */}
                            <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage your business at one place</div>
                            <div className="intro-x mt-8">
                                <input 
                                    name="username" 
                                    type="text" 
                                    className="intro-x login__input form-control py-3 px-4 block" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input 
                                    name="password" 
                                    type="password" 
                                    className="intro-x login__input form-control py-3 px-4 block mt-4" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {messages.length > 0 && messages.map((message, index) => (
                                <p key={index} className="mt-3 text-danger">{message}</p>
                            ))}

                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Sign In</button>
                            </div>
                            <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                                By signing up, you agree to our <a className="text-primary dark:text-slate-200" href="">Terms and Conditions</a> & <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
