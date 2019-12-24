import colors from '../../../../component/Color/colors';

module.exports = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  box: {
    padding: 20,
    alignSelf: 'center',
    width: '60%',
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  txt: {
    color: colors.skyBlack,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  email: {
    width: '80%',
    borderColor: colors.primary,
    borderWidth: 3,
    padding: 16,
    fontSize: 20,
    borderRadius: 8,
    margin: 10,
  },

  sign: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signup: {
    marginLeft: 6,
  },
  account: {
    paddingTop: 6,
  },
  signTxt: {
    color: colors.darPrimary,
    fontSize: 20,
  },

  imgs: {
    alignSelf: 'center',
    width: 150,
    borderRadius: 100,
    height: 150,
    margin: 10,
    backgroundColor: colors.darPrimary,
  },
  err:{
    color:"red",
    marginLeft:30,
    marginRight: 30,
}
};
