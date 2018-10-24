class Storage {

    static getSearchedUsersFromStorage(){
        // Tüm kullanıcı al

        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;

    }
    static addSearchedUserToStorage(username){
        // Kullanıcı Ekle
        let users = this.getSearchedUsersFromStorage();

        // IndexOf 

        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));


    }
    static clearAllSearchedUsersFromStorage(){
        // Tüm kullanıcıları sil

        localStorage.removeItem("searched");
    }

}