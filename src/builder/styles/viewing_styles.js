
import { makeStyles } from "@material-ui/core";

const ViewingStyle = () => {

    const SheetStyle = makeStyles(() => ({
        abilityScores: {
            width: '50%', 
            paddingBottom: "10px" 
        },
        
    }));
    return {
        SheetStyle
    };
};
export default ViewingStyle;