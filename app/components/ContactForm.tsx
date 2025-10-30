"use client"
import {sendMail} from "@/app/services/aws-ses"
import {useFormState} from 'react-dom'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'

const initialState = {
    message: "",
    error: ""
}

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [reasonForContact, setReasonForContact] = useState('');
    const [newsletterIsChecked, setNewsletterIsChecked] = useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        // Get the reason from URL parameters if available
        const reason = searchParams.get('reason');
        if (reason) {
            setReasonForContact(reason);
        }
    }, [searchParams]);

    const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
        setLoading(true);
        const result = await sendMail(prevState, formData);
        setLoading(false);
        return result;
    }, initialState);

    return <>
        {state?.message
            ? <p className="text-2xl">{state.message}</p>
            : <form action={formAction}>
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex-col flex grow">
                        <label htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="firstName"
                               name="firstName"
                               required/>
                    </div>
                    <div className="flex-col flex grow">
                        <label htmlFor="lastName">Last Name <span className="text-red-600">*</span></label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="lastName"
                               name="lastName"
                               required/>
                    </div>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="phone">Phone <span className="text-red-600">*</span></label>
                    <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="phone" name="phone"
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input className="border-b-2 border-slate-300 shadow-sm" type="text" id="email" name="email"
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="reasonForContact">Reason for contacting <span className="text-red-600">*</span></label>
                    <select 
                        className="border-b-2 border-slate-300 shadow-sm p-2" 
                        id="reasonForContact" 
                        name="reasonForContact"
                        value={reasonForContact}
                        onChange={(e) => setReasonForContact(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a reason</option>
                        <option value="send-me-info">Send me info</option>
                        <option value="request-presentation">Request a presentation</option>
                        <option value="will-i-be-impacted">Will I be impacted?</option>
                        <option value="general-comments">General comments</option>
                    </select>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="message">Message</label>
                    <textarea className="border-b-2 border-slate-300 shadow-sm" id="message" name="message"/>
                </div>
                <div>
                    <input onChange={(e) => setNewsletterIsChecked(e.target.checked)} className="mr-1" type="checkbox" id="newsletter" name="newsletter"/>
                    <label htmlFor="newsletter">I want to receive the newsletter</label>
                </div>
                <div className={`flex-col flex mb-4 ${newsletterIsChecked ? "" : "hidden"}`}>
                    <label htmlFor="mailing-address">Address <span className="text-red-600">*</span></label>
                    <input required={newsletterIsChecked} className="border-b-2 border-slate-300 shadow-sm" type="text" id="mailing-address" name="mailing-address"/>
                    <label htmlFor="city">City <span className="text-red-600">*</span></label>
                    <input required={newsletterIsChecked} className="border-b-2 border-slate-300 shadow-sm" type="text" id="city" name="city"/>
                    <label htmlFor="city">State <span className="text-red-600">*</span></label>
                    <input required={newsletterIsChecked} className="border-b-2 border-slate-300 shadow-sm" type="text" id="state" name="state"/>
                    <label htmlFor="zip">Zip <span className="text-red-600">*</span></label>
                    <input required={newsletterIsChecked} className="border-b-2 border-slate-300 shadow-sm" type="text" id="zip" name="zip"/>
                </div>
                <p className="text-red-600">
                    {state?.error}
                </p>
                <button 
                    className="bg-primary-500 py-1 px-6 rounded font-bold flex items-center" 
                    disabled={loading}
                >
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
            </form>}
    </>


}

export default ContactForm;
