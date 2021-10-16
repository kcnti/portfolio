import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'


import * as loadingData from "../json/Loading.json";

import Lottie from "react-lottie";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function Skills(props) {
    const myskills = { 'PYTHON': 80, 'JS': 60, 'C++': 40, 'GOLANG': 40, 'ReactJS': 40, 'PHP': 60, 'SQL': 50, 'CSS': 60, 'HTML': 100 }

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            setTimeout(() => {
                setSuccess(true);
            });
        }, 1000);
    }, []);

    return (
        <div className="condiv skills">
            {!success ? (
                <div>
                    <div style={{ display: "flex", margin: "25% auto" }}>
                        {!loading ? (
                            <motion.div
                                exit={{ opacity: 0,
                                    transition: {
                                        duration: 1
                                    } }}
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                            >
                                <Lottie options={defaultOptions} height={140} width={140} />
                            </motion.div>
                        ) : (
                            <h1></h1>
                            // <Lottie options={defaultOptions2} height={140} width={140} />
                        )}
                    </div>
                </div>
            ) : (
                <motion.div
                    exit={{ opacity: 0,
                        transition: {
                            duration: 0.5
                        } }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                >
                    <h1 className="subtopic">My Skills</h1>
                    <div className="codewars">
                        <a href="https://www.codewars.com/users/kcnti" target="_blank" rel="noopener norefferer">
                            <img src="https://www.codewars.com/users/kcnti/badges/large" alt="codewars" />
                        </a>
                    </div>
                    <div className="git-stats">
                        <a href="https://github.com/kcnti" target="_blank" rel="noopener norefferer">
                            <img src="https://github-readme-stats.vercel.app/api?username=kcnti&show_icons=true&theme=dark" alt="git-stats" />
                        </a>
                    </div>
                    <ul>
                        {Object.keys(myskills).map((value, index) => {
                            return (<li key={index}><p className="skill-name">{value}</p> <ProgressBar now={myskills[value]} label={`${myskills[value]}%`} /></li>)
                        })}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}

export default Skills;