class Storage {

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));

    }
    static getFilmsFromStorage(){
        let films;
    
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
    
        }
    
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
        // splice
        films.forEach(function(film,index){
            if(film.title === filmTitle) {
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    
    
    
    
    }
    static clearAllFilmsFromStorage(){
    
        localStorage.removeItem("films");
        
    }

}
