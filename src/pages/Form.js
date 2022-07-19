import React from 'react';
import { Button } from 'react-bootstrap';

const forms = [
    { name: "Name", type: "text", placeholder: "Your Name.." },
    { name: "Email ", type: "email", placeholder: "Your Email Address.." },
    { name: "Subject", type: "text", placeholder: "Subject" },

]

const Form = () => {
    return (
        <div>
            <form action="">
                {forms.map((form, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={form.name}> {form.name}: <br />
                                <input type={form.type} id={form.name} name={form.name} placeholder={form.placeholder} className='sc' /><br /><br />
                            </label><br />
                        </div>
                    )
                })}

                <label htmlFor="message">Message: <br /><br />
                    <textarea id="message" name="message" placeholder="Write something.." ></textarea>
                </label>
                <br />
                <Button type="submit"> Send Message </Button>
                <br /><br /><br />
            </form>
        </div>

    )
}
export default Form