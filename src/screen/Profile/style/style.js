import colors from '../../../component/Color/colors';

module.exports = {
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    height: 150,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.skyBlack,
    paddingBottom: 16,
    paddingLeft: 14,
  },
  head: {
    backgroundColor: colors.white,
    height: 60,
    flexDirection: 'row',
  },

  img: {
    height: 170,
    width: 170,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    borderRadius: 200 / 2,
    marginTop: 70,
    position: 'absolute',
    right: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  dp: {
    height: 150,
    width: 150,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    borderRadius: 200 / 2,
    backgroundColor: colors.white,
  },

  //=============================FALSE===============================================
  header2: {
    height: 80,
    backgroundColor: colors.color10,
    justifyContent: 'flex-end',
  },
  name2: {
    fontSize: 24,
    color: colors.white,
    paddingBottom: 12,
    paddingLeft: 14,
    fontWeight: 'bold',
    marginLeft: 140,
  },
  head2: {
    backgroundColor: colors.white,
    height: 30,
  },

  img2: {
    height: 120,
    width: 120,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    borderRadius: 200 / 2,
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  dp2: {
    height: 100,
    width: 100,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    borderRadius: 200 / 2,
  },
  headerSort: {
    flex: 1,
    width: '100%',
    position: 'absolute',
  },
  scroll: {
    top: 150,
  },

  //==================================================================================
  users: {
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 6,
    margin: 20,
    width:'36%'
  },
  userName: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 2,
  },

  social: {
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
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
