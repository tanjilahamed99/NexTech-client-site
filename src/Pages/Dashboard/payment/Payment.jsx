import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./ChackOutForm";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    return (
        <div className=" my-20 w-2/3 mx-auto">
            <h2 className="text-3xl text-center font-semibold">Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;