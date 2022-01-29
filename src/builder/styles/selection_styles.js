import { makeStyles } from "@material-ui/core";

const SelectionStyle = () => {

    const ListStyle = makeStyles(() => ({
        
        CardList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justify:'space-around',
            width: '100%',
            height: '100%',
            paddingTop: 0,
            paddingBottom: 0,
        },
        
    }));
    return {
        ListStyle
    };
};
export default SelectionStyle;