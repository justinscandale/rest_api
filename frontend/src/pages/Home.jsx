import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FaPencilAlt} from 'react-icons/fa'
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate();

    const {user} = useSelector((state)=>state.auth)
    
    useEffect(() => {
        if(user) {
            navigate('dashboard')
        }
    }, [user, navigate]);

    return (
        <>
        <section className='heading'>
            <h1> Welcome to GoalSetter <FaPencilAlt /></h1>
            <p>Our functionality: <br />
                * Securely store goals <br />
                * Track progress on goals <br />
                * See timestamped updates on goals <br />
                </p>
            </section>
        </>
    )
}

export default Home