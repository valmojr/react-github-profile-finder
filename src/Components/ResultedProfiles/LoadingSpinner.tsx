import {motion} from 'framer-motion';

export default () => {
    return (
        <>
            <motion.div
            data-testid='Loading-Spinner-test-id'
            style={{
                marginTop: '70px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100px',
                height: '100px',
                backgroundColor: '#333',
                borderRadius:'2% 50%'
            }}
            initial={{
                x: -75
            }}
            animate={{
                x: 75,
                rotate: 360,
                borderRadius: [ "50% 50%", "0% 50%"],
            }}
            transition={{
                repeatType: 'loop',
                duration: 2,
                ease: "easeInOut",
            }}
            />
            <motion.h1
                style={{
                    fontSize: '40px',
                    color: '#333'
                }}
                animate={{
                    y: 15
                }}
                transition={{
                    position: 'fixed',
                    repeatType: 'loop',
                    duration: 0.4,
                    ease: "easeInOut",
                }}
            >
                Loading...
            </motion.h1>
        </>
    );
}