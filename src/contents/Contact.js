import Social from '../components/Social';
import { motion } from 'framer-motion';

function Contact() {
    return(
        <div className="condiv">
            <motion.div
                exit={{ opacity: 0,
                    transition: {
                        duration: 1
                    } }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
            >
                <h1 className="subtopic">Contact Me</h1>
                <div className="contact-box">
                    <h3><i class="far fa-envelope"></i> : kcntinun@gmail.com</h3>
                    <a href="https://instagram/kcntinun" className="contact-a">
                        <h3><i class="fab fa-instagram"></i>  : kcntinun</h3>
                    </a>
                </div>
                <Social />
            </motion.div>
        </div>
    );
}

export default Contact;