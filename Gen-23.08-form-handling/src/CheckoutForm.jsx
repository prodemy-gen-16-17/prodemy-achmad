import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
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
        <div className="flex">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name:</label>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue=""
                            placeholder="firstName"
                            className="w-50 rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200" />}
                    />
                    <p>{errors.firstName?.message}</p>
                </div>

                <div>
                    <label>Last Name:</label>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue=""
                            placeholder="lastName"
                            className="w-50 rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200" />}
                    />
                    <p>{errors.lastName?.message}</p>
                </div>

                <div>
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} defaultValue=""
                            placeholder="email"
                            className="w-50 rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200" />}
                    />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label>City:</label>
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className="w-50 rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200">
                                <option value="Select">Please Select</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Bandung">Bandung</option>
                            </select>
                        )}
                    />
                    <p>{errors.city?.message}</p>
                </div>

                <div>
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
                    <p>{errors.terms?.message}</p>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 mr-4">Submit</button>

            </form>
        </div>

    );
}

export default CheckoutForm;
