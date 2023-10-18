import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, submitOrder } from './actions/checkoutActions';
import DetailProduct from './DetailProduct'; 
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    address: yup.string().required('Address is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup
        .string()
        .matches(/^[0-9]+$/, 'Invalid phone number')
        .required('Phone Number is required'),
    size: yup.string().required('Size is required'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

function CheckoutForm() {
    const product = useSelector((state) => state.product); // Ganti dengan state yang sesuai
    const cart = useSelector((state) => state.checkout.cart);
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // Buat objek yang berisi semua data formulir
        const formData = {
            firstName: data.firstName,
            address: data.address,
            email: data.email,
            phoneNumber: data.phoneNumber,
            size: data.size,
            // tambahkan data lain sesuai kebutuhan
        };

        // Buat permintaan HTTP POST
        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Atur header untuk mengindikasikan bahwa Anda mengirim JSON
            },
            body: JSON.stringify(formData), // Ubah objek ke JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Jika Anda mengharapkan respons JSON
            })
            .then((responseData) => {
                console.log('Data berhasil dikirim:', responseData);
                // Lakukan apa yang Anda inginkan dengan respons, jika diperlukan
            })
            .catch((error) => {
                console.error('Terjadi kesalahan:', error);
                // Tangani kesalahan, jika diperlukan
            });
    };



    const handleAddToCart = () => {
        if (product) {
            const productData = {
                name: product.name,
                price: product.price,
                quantity: 1,
            };
            dispatch(addToCart(productData));
        }
    };

    const handlePlaceOrder = () => {
        dispatch(submitOrder());
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <div className="mb-4">
                    <h2>Rincian Pesanan</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.name}>
                            <DetailProduct product={item} /> {/* Gunakan DetailProduct komponen di sini */}
                            {/* Menampilkan gambar produk dari item */}
                            <img src={item.image} alt={item.name} />
                            {/* ... Tampilkan informasi lainnya tentang item */}
                          </li>
                        ))}
                    </ul>
                </div>

                <button className="bg-green-500 text-white py-2 px-4" onClick={handleAddToCart}>
                    Tambah ke Keranjang
                </button>

                <button className="bg-blue-500 text-white py-2 px-4" onClick={handlePlaceOrder}>
                    Submit Pesanan
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-4 bg-gray-400 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label>First Name:</label>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <input {...field} value={field.value || ""} placeholder="First Name" className="w-full p-2 rounded-lg border border-gray-200" />
                        )}
                    />
                    <p className="text-red-500">{errors.firstName?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Address:</label>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <input {...field} value={field.value || ""} placeholder="Address" className="w-full p-2 rounded-lg border border-gray-200" />
                        )}
                    />
                    <p className="text-red-500">{errors.address?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input {...field} value={field.value || ""} placeholder="Email" className="w-full p-2 rounded-lg border border-gray-200" />
                        )}
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>

                <div className="mb-4">
                    <label>Phone Number:</label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <input {...field} value={field.value || ""} type="tel" placeholder="Phone Number" className="w-full p-2 rounded-lg border border-gray-200" />
                        )}
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
                                <input type="checkbox" {...field} />
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
