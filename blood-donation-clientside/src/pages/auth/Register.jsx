import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoMdPhotos } from "react-icons/io";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState('');
    const {loginWithGoogle, handleLogOut} = useAuth();

    const onSubmit = async (data) => {
        const userInfo = {
             name: data.name,
             photo: data.photo,
             email: data.email,
             password: data.password,
        }
        
    }

    // hadleGoogleLogin 
    const hadleGoogleLogin = () => {
        loginWithGoogle();
    }

    // Application title
    useEffect(() => {
        document.title = "Register | Blood Donation Application";
    }, []);


    // motion.js
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: { duration: 0.3 }
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-gray-600">
                            Join our blood donor community
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <motion.div
                            className="space-y-6"
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="form-control mb-4">
                                <label htmlFor="name" className="text-gray-700 flex items-center gap-1">
                                    <span>Full Name</span>
                                    <span className="text-red-500 text-base font-semibold"> *</span>
                                </label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
                                    </div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={`w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600`}
                                        placeholder="John Doe"
                                        {...register("name", { required: true })}
                                    />
                                    <span>{errors.name && <span className='text-red-500'>Name is required</span>}</span>
                                </div>
                            </div>
                            <div className="form-control mb-4">
                                <label htmlFor="photo" className="text-gray-700 flex items-center gap-1">
                                    <span>Upload Photo</span>
                                    <span className="text-red-500 text-base font-semibold"> *</span>
                                </label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <IoMdPhotos className="text-gray-400 text-lg" />
                                    </div>
                                    <input
                                        id="photo"
                                        name="photo"
                                        type="url"
                                        className={`w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600`}
                                        placeholder="Upload your photo"
                                        {...register("photo", { required: true })}
                                    />
                                    <span>{errors.photo && <span className='text-red-500'>Photo is required</span>}</span>
                                </div>
                            </div>
                            <div className="form-control mb-4">
                                <label htmlFor="email" className="text-gray-700 flex items-center gap-1">
                                    <span>Email</span>
                                    <span className="text-red-500 text-base font-semibold"> *</span>
                                </label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600`}
                                        placeholder="johndoe123@gmail.com"
                                        {...register("email", { required: true })}
                                    />
                                    <span>{errors.email && <span className='text-red-500'>Email is required</span>}</span>
                                </div>
                            </div>
                            <div className="form-control mb-4">
                                <label htmlFor="password" className="text-gray-700 flex items-center gap-1">
                                    <span>Password</span>
                                    <span className="text-red-500 text-base font-semibold"> *</span>
                                </label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input type={showPassword ? 'text' : 'password'}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 100,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} id='password' name="password" placeholder=".............." className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-2xl placeholder:absolute placeholder:-top-[3px] text-gray-600" required />

                                    {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 10 characters</p>}
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-[10px] right-2 hover:bg-gray-300 border-0 outline-0 bg-white text-black z-20'>
                                        {
                                            showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />
                                        }
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full text-base py-6 bg-red-500 text-white border-0"
                            >
                                Sing Up
                            </button>
                        </motion.div>
                    </form>
                    <div className="divider divider-neutral my-4 text-gray-600">OR</div>
                    <motion.div
                        className="space-y-6"
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex justify-center space-x-4">
                            <button
                                type="submit"
                                onClick={hadleGoogleLogin}
                                className="btn py-6 w-full bg-red-500 text-base text-white border-0">With Google</button>
                        </div>
                    </motion.div>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-red-600 hover:text-red-400">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Register;