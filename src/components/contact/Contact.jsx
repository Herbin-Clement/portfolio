import { Element } from 'react-scroll/modules';

import Title from '../util/Title';
import ContactItem from './ContactItem';

import "./contact.css";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <Element name="contact"/>
            <Title text="Contact." color="text-orange"/>
            <div className="contactContent">
                <ContactItem title="Place" text="Lille"/>
                <ContactItem title="E-Mail" text="clement.herbin@hotmail.com"/>
                <ContactItem title="LinkedIn" text="LinkedIn Profile" link="https://www.linkedin.com/in/cl%C3%A9ment-herbin/"/>
            </div>
        </div>
    );
};

export default Contact;