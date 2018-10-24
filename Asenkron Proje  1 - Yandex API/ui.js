function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");


}
UI.prototype.changeUI = function(){
    // Arayüz Değiştir

    this.outputImage.src = `images/${this.languageList.value}.png`;

}
UI.prototype.displayTranslate = function(word) {
    this.outputWord.textContent = word;
    
}