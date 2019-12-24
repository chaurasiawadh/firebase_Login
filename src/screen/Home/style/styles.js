import colors from '../../../component/Color/colors'
module.exports = {
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    box:{
        padding: 20,
        alignSelf: 'center',
        width:"50%",
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: colors.primary,
    },
    txt:{
        color: colors.skyBlack,
        fontSize:20,
        textAlign:"center",
        fontWeight: 'bold',
    },
}