import React, {useState, useEffect} from 'react'
import Preloader from './Home/Preloader'

const withPreloader = (WrappedComponent) => {
    return () => {
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const timer = setTimeout(() =>{
                setLoading(false)
            }, 2000);

            return () => clearTimeout(timer)
        }, []);

        return loading ? <Preloader /> : <WrappedComponent />;
    };
}

export default withPreloader