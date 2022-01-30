
import { makeStyles } from "@material-ui/core";

const ViewingStyle = () => {

    const SheetStyle = makeStyles(() => ({
        abilityScores: {
            width: '50%', 
            paddingBottom: "10px" 
        },
        outlinedBox: {
            border: '1px',
            borderRadius: '5px',
            borderColor: 'lightGray',
            borderStyle: 'solid'
        },
        gridTop:{
            paddingTop: '2%'
        },
        
    }));
    return {
        SheetStyle
    };
};
export default ViewingStyle;