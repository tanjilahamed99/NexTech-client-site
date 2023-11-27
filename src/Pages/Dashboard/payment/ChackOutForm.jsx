import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hooks/AxiosPublic/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers/useUsers";

const CheckOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosPublic = UseAxiosPublic()
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()
    const { user } = UseAuth()
    const [,refetch] = useUsers()

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { price: 40 })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosPublic])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },

        )
        if (confirmError) {
            console.log(confirmError)
        } else {
            if (paymentIntent.status === "succeeded") {
                axiosPublic.patch('/users', {
                    email: user?.email
                })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                icon: "success",
                                title: "successful payment",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                            navigate('/dashboard/myProfile')
                        }
                    })
            }
        }

    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className=""
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            '::placeholder': {
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-outline my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;