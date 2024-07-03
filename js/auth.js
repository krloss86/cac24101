function isLogged() {
    const usuario = localStorage.getItem('USUARIO');   
    if(!usuario) {
        //redireccionamos a la home /
        window.location.href = '/';
    }
}

function logout() {
    localStorage.removeItem('USUARIO');
    window.location.href = '/';
}