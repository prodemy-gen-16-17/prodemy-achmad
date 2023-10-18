import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    address: yup.string().required('address is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone Number is required'),
    size: yup.string().required('Size is required'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

function CheckoutForm() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Gunakan yupResolver
    });

    const onSubmit = (data) => {
        console.log(data); // Lakukan apa yang Anda inginkan dengan data form
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-4 bg-gray-400 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label>First Name:</label>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue="" placeholder="First Name" className="w-full p-2 rounded-lg border border-gray-200" />}
                    />
                    <p className="text-red-500">{errors.firstName?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Address:</label>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue="" placeholder="Address" className="w-full p-2 rounded-lg border border-gray-200" />}
                    />
                    <p className="text-red-500">{errors.address?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue="" placeholder="Email" className="w-full p-2 rounded-lg border border-gray-200" />}
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Phone Number:</label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue="" type="tel" placeholder="Phone Number" className="w-full p-2 rounded-lg border border-gray-200"/>
                        }
                    />
                    <p className="text-red-500">{errors.phoneNumber?.message}</p>
                </div>


                <div className="mb-4">
                    <label>Size</label>
                    <Controller
                        name="size"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className="w-full p-2 rounded-lg border border-gray-200">
                                <option value="">Please Select</option>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                        )}
                    />
                    <p className="text-red-500">{errors.size?.message}</p>
                </div>

                <div className="mb-4">
                    <label>
                        <Controller
                            name="terms"
                            control={control}
                            render={({ field }) => (
                                <input type="checkbox" {...field} defaultValue="" />
                            )}
                        />{' '}
                        Accept Terms and Conditions
                    </label>
                    <p className="text-red-500">{errors.terms?.message}</p>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
            </form>
        </div>


    );
}

export default CheckoutForm;
