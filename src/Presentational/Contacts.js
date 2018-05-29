import React from 'react';
import {Form } from 'antd';
import 'antd/lib/form/style/index.css'
import {Info} from "./Info";
import {ContactForm} from "../Components/contactForm";

const handleSubmit = (e) => {
    e.preventDefault();
}
 const ContactsBase = ()  => (
    <div>
        <h1>
                Contacts
        </h1>
        <Info />
        <ContactForm />
    </div>
)

export const Contacts = ContactsBase

