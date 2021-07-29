var x = 10;
console.log("x = " + x);
var Etudiant = /** @class */ (function () {
    function Etudiant() {
    }
    Etudiant.prototype.info = function () {
        console.log("Objet etudiant");
    };
    return Etudiant;
}());
var e = new Etudiant();
e.info();
