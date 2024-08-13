import { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/admin');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true); 
      });
  };

  return (
    <div className='mt-32 flex justify-center py-10'>
      <div className="form-container bg-white p-6 border rounded-lg shadow-lg w-full max-w-md mt-10 mb-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button> 
        </form>
        {
          error && (
            <h2 className='mt-4 ms-3 text-red-400 font-bold'>Wrong email or password</h2>
          )
        }
      </div>
    </div>
  );
};

export default Login;
