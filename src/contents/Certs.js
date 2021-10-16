import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Certcard from '../components/Certcard';

function Certs() {

    const certs = {
        "SmartNodeMCU": {
            "title": "IoT (Smart NodeCMU)",
            "detail": "รายการ ค้นหาสุดยอดฝีมือโทรคมนาคมและไอซีทีเทิดพระเกียรติครั้งที่ 13 ได้อันดับที่ 2",
            "pic": "/assets/SmartNodeMCU.png"
        },
        "CTFrtaf": {
            "title": "RTAF Junior CTF 2020",
            "detail": "เข้าร่วมแข่งขัน Capture The Flag ของกองทัพอากาศ (RTAF) ได้อันดับที่ 2",
            "pic": "/assets/CTFrtaf.png"
        },
        "WRO2019": {
            "title": "World Robotic Olympiad (WRO)",
            "detail": "แข่งขันโอลิมปิกหุ่นยนต์โดยใช้ Lego MindStorm EV3 โดยจะเป็นการแข่งขันให้ Track ตามเส้นสีดำและจะมีสิ่งกีดขวางต่างๆวางให้เพื่อนให้เราหาเส้นทางที่ถูกต้อง และทำเวลาให้เร็วที่สุด ได้อันดับที่ 5",
            "pic": "/assets/WRO19.png"
        },
        "CyberApocalypse": {
            "title": "Cyber Apocalypse CTF",
            "detail": "เข้าร่วมการแข่งขัน Capture The Flag ของ HackTheBox ในรายการ Cyber Apocalypse",
            "pic": "/assets/CyberApocalypse.png"
        },
        "iot-node-red": {
            "title": "IOT w/Node-Red & Thingsboard",
            "detail": "อบรมการพัฒนา IoT Application ด้วย Node-Red และ ThingsBoard",
            "pic": "/assets/HCIfibo.png"
        },
        "dataScienceMH": {
            "title": "Basic Data Science",
            "detail": "อบรมพื้นฐาน Data Science จากมหาลัยมหิดล โดยใช้โปรแกรม RapidMiner",
            "pic": "/assets/basicDataScience.png"
        },
        "SololearnPyCore": {
            "title": "Sololearn Python Core",
            "detail": "Demonstrating theoretical and practical understanding of Python Core",
            "pic": "/assets/SololearnPyCore.png"
        },
        "SololearnJS": {
            "title": "Sololearn JavaScript Course",
            "detail": "Demonstrating theoretical and practical understanding of JavaScript",
            "pic": "/assets/SololearnJS.png"
        },
        "SololearnPyTUT": {
            "title": "Sololearn Python 3 Tutorial Course",
            "detail": "Python3 Tutorial course",
            "pic": "/assets/SololearnPyTUT.png"
        },
        "HackerRankBasicPy": {
            "title": "HackerRank Basic Python",
            "detail": "Python (Basic)",
            "pic": "/assets/HackerRankBasicPy.png"
        },
        "greatScoreM4": {
            "title": "เกียรติบัตรเรียนดี",
            "detail": "ทำระดับผลการเรียนเฉลี่ยประจำปี 2563 ได้ 3.97",
            "pic": "/assets/greatScoreM4.png"
        },
        "LoyKraThong": {
            "title": "กิจกรรมประดิษฐ์กระทงลอย",
            "detail": "เข้าร่วม กิจกรรมการประดิษฐ์กระทงลอย ประจำปีการศึกษา 2562",
            "pic": "/assets/loykrathong.png"
        },
        "wichakarnDay": {
            "title": "วิทยากรโครงการสร้างจุดมุ่งหมายทางการเรียน",
            "detail": "ได้เป็นวิทยากรในวันวิชาการ ของโรงเรียนสาธิต มศว ประสานมิตร (ฝ่ายมัธยม)",
            "pic": "/assets/wittayakorn.png"
        }
    }

    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    })

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const pageVariants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: "-100vw",
            transition: {
                duration: 1
            }
        }
    }

    return (
        <div className="condiv certs">
            <motion.div
                exit="out"
                animate="in"
                initial="out"
                variants={pageVariants}
                transition={{ duration: 1 }}
            >
                <h1 className="subtopic">Certificates</h1>
                {Object.keys(certs).map((value, idx) => (
                    <Certcard idx={idx} title={certs[value].title} detail={certs[value].detail} pic={certs[value].pic} />
                ))}
            </motion.div>
            <div className="scroll-to-top">

                {isVisible && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                    <div onClick={() => scrollToTop()}>
                        <i class="fas fa-arrow-circle-up fa-4x"></i>
                    </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Certs;