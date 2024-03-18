
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl.value;
        console.log(name, email, password, photourl)
        const userDetails = {
            Name: name,
            Email: email,
        };

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photourl)
                    .then(() => {
                        axios.post('https://tour-bd-irect-server.vercel.app/Users', userDetails, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                        console.log('user profile info updated')
                        // reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registered successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })


                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                
            })


    }
    return (
        <div>
            <section className="py-10 lg:py-20  dark:text-gray-50">

                <form onSubmit={handleRegister} >
                    <div className="w-full max-w-md p-8 space-y-3 mx-auto rounded-xl bg-gray-900 text-gray-100">
                        <h1 className="text-2xl font-bold text-center">Register Here</h1>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Name</label>
                            <input type="text" placeholder="name" name="name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input type="email" placeholder="Email" name="email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Password</label>
                            <input type="password" placeholder="password" name="password" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">PhotoURL</label>
                            <input type="text" placeholder="https://" name="photourl" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer" type="submit" value="Sign Up" />
                        <p className="text-xs text-center sm:text-gray-400 ">Do not have an account?
                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline ml-2 text-gray-100">Login</Link>
                        </p>
                        <ToastContainer></ToastContainer>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;