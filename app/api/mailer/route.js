import { NextResponse } from 'next/server'
import { sendMail } from '@/app/services/mailService'


export async function POST(request) {
    //const {title, author, email}=await request.json()
   // console.log(await request.json())
     const re= await request.json()
     console.log(re.name)
     const emailer= process.env.USERMAIL
     const {name, email, subject, message}=re
   await sendMail(email, emailer,subject,message)
    return NextResponse.json({ name})
}