import { motion } from 'framer-motion';

function About() {

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 2
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "-100vw",
            scale: 0.1,
            transition: {
                duration: 1
            }
        }
    }

    return(
        <div className="condiv about">
            <motion.div
                exit="out"
                animate="in"
                initial="initial"
                variants={pageVariants}
                transition={{ duration: 1, type: "tween", ease: "anticipate" }}
            >
                <h1 className="subtopic">About Me</h1>
                <img className="profilepic" src="https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/163765827_2551391631830297_740082723885423571_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGd5WT5vMHQvcq7zpP1z7Ks21QbNU4tmWXbVBs1Ti2ZZZhB3NZXqbhN15sS8h9R9T9R_xvr_r0YRjjbkXAr12xJ&_nc_ohc=IvVoUogDESEAX-RyB54&_nc_ht=scontent.fbkk29-2.fna&oh=5f1b9425a7d6f3e7ac505faca3944eb7&oe=6187EC1E" alt="profilepic" />
                <h3>Hi, I'm Earth</h3>
                <p>
                    Hi, my name is Kantinun but everyone called me Kanti, so you can call me whatever you want.
                </p>
            </motion.div>
        </div>
    )
}

export default About;