import Title from '../util/Title';
import ContactItem from './ContactItem'

const Contact = () => {
    return (
        <div className="flex flex-col items-center w-100p h-30v p-10 bg-black15">
            <Title text="Contact." color="text-orange"/>
            <div className="flex justify-evenly w-80p h-100p">
                <ContactItem title="Place" text="Lille"/>
                <ContactItem title="E-Mail" text="clement.herbin@hotmail.com"/>
                <ContactItem title="LinkedIn" text="LinkedIn Profile"/>
            </div>
        </div>
    );
};

export default Contact;