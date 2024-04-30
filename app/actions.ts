'use server'


export async function sendMail(prevState: any, formData: FormData){
    console.log(formData)
    return prevState;
}

export async function testMail(message:string){

    console.log('message', message);
}