import React from 'react';
import { Button } from 'react-bootstrap';

const Form = () => {
    return (
        <div>
                <form action="">
                    <label htmlFor="name">Name: <br />
                        <input type="text" id="name" name="name" placeholder="Your Name.." className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="email">Email:<br />
                        <input type="email" id="email" name="email" placeholder="Your Email Address.." className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="subject">Subject:<br />
                        <input type="text" id="subject" name="subject" placeholder="Subject" className='sc' /><br /><br />
                    </label><br />
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