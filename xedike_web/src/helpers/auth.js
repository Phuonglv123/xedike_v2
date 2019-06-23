export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': user.token };
    } else {
        return {};
    }
}

export function Id_passenger() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return user._id;
    } else {
        return {};
    }
}