import "./Contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import done from '../../assets/Animation/done.json'
import email from '../../assets/Animation/email.json'
const Contact = () => {
    const [state, handleSubmit] = useForm("mqkryqzp");
    // if (state.succeeded) {
    //     return <h1>Thanks for joining!</h1>;
    // }
    return (
        <section className="contact">
        <h1 className="title">
            <span className="icon-envelope"></span>
            Contact Us
        </h1>
        <p className="sub-title">
            Contact us for more information and Get notificated when i publish
            Something new.
        </p>
        <div style={{justifyContent:"space-between"}} className="flex">
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <label htmlFor="email">Email Address</label>
                    <input autoComplete="off" required type="email" name="email" id="email" />
                    <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    />
                </div>

                <div style={{ marginTop: "24px" }} className="flex">
                    <label htmlFor="message">Your message</label>
                    <textarea required name="message" id="message"></textarea>
                    <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    />
                </div>

                <button className="submit" disabled={state.submitting} >
                    {state.submitting ? "Submitting..." : "Submit"}
                </button>
                {state.succeeded && (<p className="flex" style={{fontSize : "18px" , marginTop : "1.7rem"}}>
                    <Lottie loop={false} style={{width:"37px"}} animationData={done} />
                    Your Message has been sent successfully.
                </p>)}
                
            </form>
            <div className="animation">
                <Lottie
                    className="contact-Animation"
                    animationData={email} 
                    style={{width : "355px"}}
                />
            </div>
        </div>
        </section>
    );
};

export default Contact;
