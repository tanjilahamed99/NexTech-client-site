import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./ChackOutForm";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    return (
        <div className=" my-20 w-2/3 mx-auto">
            <SectionTittle subTittle={'Payment'} tittle={'Payment Route'}></SectionTittle>
           <div>
            <p className="flex items-center gap-2">price:<h2 className="text-xl font-bold">$40</h2></p>
           </div>
            <div className="mt-10">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;