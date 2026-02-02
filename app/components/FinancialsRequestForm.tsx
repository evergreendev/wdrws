"use client"
import {useFormState} from "react-dom";
import {useState} from "react";
import {sendFinancialsRequestMail} from "@/app/services/aws-ses";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

const initialState = {
    message: "",
    error: ""
}

export default function FinancialsRequestForm() {
    const [loading, setLoading] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
        setLoading(true);
        if (!executeRecaptcha) {
            setLoading(false);
            return { ...prevState, error: "reCAPTCHA not available" };
        }
        const token = await executeRecaptcha("financials_request");
        formData.append("g-recaptcha-response", token);
        const result = await sendFinancialsRequestMail(prevState, formData);
        setLoading(false);
        return result;
    }, initialState);

    return (
        <>
            {state?.message
                ? <p className="text-2xl">{state.message}</p>
                : <form action={formAction}>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex-col flex grow">
                            <label htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                            <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="firstName" name="firstName" required/>
                        </div>
                        <div className="flex-col flex grow">
                            <label htmlFor="lastName">Last Name <span className="text-red-600">*</span></label>
                            <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="lastName" name="lastName" required/>
                        </div>
                    </div>
                    <div className="flex-col flex mb-4">
                        <label htmlFor="email">Email <span className="text-red-600">*</span></label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="email" id="email" name="email" required/>
                    </div>
                    <div className="flex-col flex mb-4">
                        <label htmlFor="organization">Organization <span className="text-red-600">*</span></label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="organization" name="organization" required/>
                    </div>
                    <p className="text-red-600">{state?.error}</p>
                    <button className="bg-primary-500 py-1 px-6 rounded font-bold flex items-center" disabled={loading}>
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            }
        </>
    )
}
