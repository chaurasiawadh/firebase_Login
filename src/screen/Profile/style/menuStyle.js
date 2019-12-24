import colors from '../../../component/Color/colors';

module.exports = {
  container: {
    marginTop: 30,
    justifyContent: 'flex-end',
  },
  touch: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 20,
    width: '100%',
  },
  txt: {
    paddingLeft: 20,
    fontSize: 20,
    marginLeft: 20,
    color: '#2b2d2f',
  },
  btn: {
    marginTop: 20,
    marginBottom: 300,
    padding: 12,
    alignSelf: 'center',
    width: '50%',
    borderRadius: 10,
    backgroundColor: colors.darPrimary,
  },
  btnTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
  },
};
