"use client"
import {sendMembershipMail} from "@/app/services/aws-ses"
import {useFormState} from 'react-dom'
import {useState} from 'react'

const initialState = {
    message: "",
    error: ""
}

const MembershipForm = () => {
    const [loading, setLoading] = useState(false);
    const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
        setLoading(true);
        const result = await sendMembershipMail(prevState, formData);
        setLoading(false);
        return result;
    }, initialState);

    return <>
        {state?.message
            ? <p className="text-2xl">{state.message}</p>
            : <form action={formAction}>
                <div className="flex flex-wrap gap-2 mb-4">
                    <p className="w-full" style={{margin: 0}}>Member Information <span className="text-red-600">*</span>
                    </p>
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
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex-col flex grow">
                        <label htmlFor="point_of_contact_primary">Point of Contact (primary)</label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="text"
                               id="point_of_contact-primary" name="point_of_contact-primary"/>
                    </div>
                    <div className="flex-col flex grow">
                        <label htmlFor="point_of_contact_secondary">Point of Contact (secondary)</label>
                        <input className="border-b-2 border-slate-300 shadow-sm" type="text"
                               id="point_of_contact-secondary" name="point_of_contact-secondary"/>
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
                    <label htmlFor="address">Address <span className="text-red-600">*</span></label>
                    <textarea className="border-b-2 border-slate-300 shadow-sm" id="address" name="address"
                              required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="website">Website (if applicable)</label>
                    <input className="border-b-2 border-slate-300 shadow-sm" id="website" name="website"
                    />
                </div>
                <div className="flex-col flex mb-4">
                    <fieldset className="border-2 border-slate-200 shadow-sm p-2">
                        <legend>Membership Choice <span className="text-red-600">*</span></legend>
                        <div className="flex flex-wrap gap-2">
                            <div className="w-full sm:w-5/12">
                                <input className="mr-1" type="checkbox" id="class_1_member" name="membership_choice"
                                       value="class_1_member"/>
                                <label htmlFor="class_1_member">Class 1 Member</label>
                            </div>
                            <div className="w-full sm:w-5/12">
                                <input className="mr-1" type="checkbox" id="class_2_member" name="membership_choice"
                                       value="class_2_member"/>
                                <label htmlFor="class_2_member">Class 2 Member</label>
                            </div>
                            <div className="w-full sm:w-5/12">
                                <input className="mr-1" type="checkbox" id="associate_member" name="membership_choice"
                                       value="associate_member"/>
                                <label htmlFor="associate_member">Associate Member</label>
                            </div>
                            <div className="w-full sm:w-5/12">
                                <input className="mr-1" type="checkbox" id="supporting_individual"
                                       name="membership_choice"
                                       value="supporting_individual"/>
                                <label htmlFor="supporting_individual">Supporting Individual</label>
                            </div>
                        </div>

                    </fieldset>
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

        <p style={{marginTop: "1rem"}} className="text-sm">** If an organization has contributed money to WDRWS equal
            to or in excess of their otherwise required Member
            Class dues then the required membership dues will be waived for fiscal year {new Date().getFullYear()}.
            **</p>
        <p>WDRWS will invoice members.</p>
    </>


}

export default MembershipForm;
