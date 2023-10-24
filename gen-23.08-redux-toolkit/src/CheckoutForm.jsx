import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import * as yup from 'yup';
import { toRupiah } from "./utils/formatter";


function CheckoutForm() {
    // const { dataCheckout } = useContext(CheckoutContext);
    const { dataCheckout } = useSelector((state) => state.checkout);
    console.log(dataCheckout);

    const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        address: yup.string().required('address is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone Number is required'),
        size: yup.string().required('Size is required'),
        terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
        // productName: yup.string().required('Product Name is required'),
        // price: yup.number().required('Price is required'),
        // quantity: yup.number().required('Quantity is required').integer('Quantity must be an integer'),
    });


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // const [productData, setProductData] = useState({}); 
    // useEffect(() => {
    //     axios.get("http://localhost:3000/products")
    //         .then((response) => {
    //             const data = response.data;
    //             setProductData(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []); 

    const onSubmitForm = (data) => {
        console.log(data);

        const payload = {
            firstName: data.firstName,
            customerAddress: data.address,
            customerEmail: data.email,
            phoneNumber: data.phoneNumber,
            size: data.size,
            productName: dataCheckout.name,
            price: dataCheckout.price,
            qty: dataCheckout.qty,
        };

        axios
            .post("http://localhost:3000/bookings", payload)
            .then(() => {
                console.log("Successfully made a new booking!");
            })
            .catch((error) => console.log(error));

        // fetch('http://localhost:3000/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json', 
        //     },
        //     body: JSON.stringify(payload), 
        // })
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json(); 
        //     })
        //     .then((responseData) => {
        //         console.log('Data berhasil dikirim:', responseData);
        //     })
        //     .catch((error) => {
        //         console.error('Terjadi kesalahan:', error);
        //     });
    };



    return (
        <div className="flex h-80vh items-center justify-center">
            <div className="w-96 p-4 bg-gray-400 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    {/* Form Bagian Pertama (Data Pengguna) */}
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
                            render={({ field }) => <input {...field} defaultValue="" type="tel" placeholder="Phone Number" className="w-full p-2 rounded-lg border border-gray-200" />
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

            <div className="w-96 p-4 bg-gray-400 rounded-lg shadow-lg ml-4">
                {/* Form Bagian Kedua (Order Summary) */}
                <div>
                    <h2>Your Order</h2>
                    <hr />
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-4">
                            <img src={dataCheckout?.image} alt="foto" className="w-16" />
                            <h3 className="font-bold">{dataCheckout?.name}</h3>
                            <span> qty:{dataCheckout?.qty}</span>
                            <span>{toRupiah(dataCheckout?.price)}</span>
                            {/* <span>Size: {selectedSize}</span> */}
                        </div>
                    </div>

                    <hr />

                    <div className="flex justify-between mt-4">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">
                            {toRupiah(dataCheckout?.qty * dataCheckout?.price)}
                        </span>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default CheckoutForm;
