const LoginService = {
  login(userInfo) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (userInfo.name === 'yasuo') {
          resolve({id: 9527, name: 'yasuo man'})
        } else {
          reject({err: {msg: '用户名或密码错误'}})
        }
      }, 1000);
    })
  },

  getMoreUserInfo(userInfo) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (userInfo.id === 9527) {
          resolve({...userInfo, score: '100'})
        } else {
          reject({err: {msg: '获取详细信息错误'}})
        }
      }, 1000);
    })
  }
}

export default LoginService