import colors from '../../../component/Color/colors'

module.exports = {
    container:{
        flex: 1, 
        justifyContent: 'center'
      },
      input: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: colors.skyBlack,
        placeholderTextColor: 'red',
      },
      btn: {
        alignSelf: 'center',
        padding: 12,
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: colors.darPrimary,
      },
      btnTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.white,
      },
      imgs: {
        alignSelf: 'center',
        width: 150,
        borderRadius: 100,
        height: 150,
        margin: 10,
        backgroundColor: colors.black,
      },
      icn:{
        alignSelf:"center"
      }
}