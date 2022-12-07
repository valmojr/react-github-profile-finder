import {motion} from 'framer-motion';

export default (props: any) => {
    return (<motion.form
            data-testid='searchForm'
            style={{
                width: '320px',
                height: '150px',
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center'
            }}
        >
        {props.children}
    </motion.form>);
}