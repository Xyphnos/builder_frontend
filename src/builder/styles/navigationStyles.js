import { makeStyles } from "@material-ui/core";

const NavStyle = () => {

    const BarStyle = makeStyles(() => ({
        
        AppBarComp: {
            zIndex: 500,
            backgroundColor: '#343638',
        },
        SideBarComp: {
            zIndex: 100,
            backgroundColor: '#343638',
        },
        SideListComp: {
            color: 'white'
        },
        LogoComp: {
            heihght: '50px',
            width: '50px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        
    }));

    const BGStyle = makeStyles(() => ({
        OverContainer:{
            width: '100%',
            background: 'darkgray'
        }
    }));
    return {
        BarStyle,
        BGStyle,
    };
};
export default NavStyle;