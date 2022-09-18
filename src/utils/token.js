// 获取Token
export const getToken = () => {
    let token = localStorage.getItem('token')
    if(!token) return ''
    return token
}

// 设置token
export const setToken = (token) => {
    localStorage.setItem('token', token)
}

// 清除token
export const removeToken = () => {
    localStorage.removeItem('token')
}