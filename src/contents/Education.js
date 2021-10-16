import Widecard from '../components/Widecard';
import { motion } from 'framer-motion';

function Education() {

    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: "100vw",
            transition: {
                duration: 1
            }
        }
    }
    
    return(
        <div className="condiv">
            <motion.div
                exit="out"
                animate="in"
                initial="out"
                variants={pageTransition}
                transition={{ type: "spring", duration: 2}}
            >
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Primary" where="Satit Prasarnmit Demonstration School (Primary School)" from="2552" to="2558" />
                <Widecard title="Secondary" where="Satit Prasarnmit Demonstration School (Secondary School)" from="2559" to="Present" />
            </motion.div>
        </div>
    );
}

export default Education;