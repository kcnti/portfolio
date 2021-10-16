import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'
import { motion } from "framer-motion"

function Home() {

    const pageVariants = {
        initial: {
            opacity: 0,
            y: "100vh",
            scale: 0.8
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "-100vh",
            scale: 1.2,
            transition: {
                duration: 1
            }
        }
    }

    return(
        <div className="condiv home">
            <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "anticipate", duration: 1 }}
            >
                <h2>Welcome to my portfolio</h2>
                <img src="https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/163765827_2551391631830297_740082723885423571_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGd5WT5vMHQvcq7zpP1z7Ks21QbNU4tmWXbVBs1Ti2ZZZhB3NZXqbhN15sS8h9R9T9R_xvr_r0YRjjbkXAr12xJ&_nc_ohc=IvVoUogDESEAX-RyB54&_nc_ht=scontent.fbkk29-2.fna&oh=5f1b9425a7d6f3e7ac505faca3944eb7&oe=6187EC1E" alt="profile" className="profilepic" />
                <ReactTypingEffect className="typingeffect" text={["I'm Kanti", "I'm Earth"]} speed={80} erase={200}></ReactTypingEffect>
                {/* <h2>I'm Earth</h2> */}
                <Social />
            </motion.div>
        </div>
    );
}

export default Home;