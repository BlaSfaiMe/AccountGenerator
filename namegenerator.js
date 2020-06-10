/*
------------------------------------------------------
				Created by Kestrel
		My github : https://github.com/BlaSfaiMe/
				Thanks. Do no copy
					2020 Kestrel
------------------------------------------------------
*/

function getPassword(length){
	let char = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]
	let number = ["1","2","3","4","5","6","7","8","9"]
	let pass = "";
	for(i = 0; i < length; i++){
		let charornum = Math.floor(Math.random() * 2)
		let lowerorhigh = Math.floor(Math.random() * 2)
		if(charornum){
			if(lowerorhigh){
				pass += char[Math.floor(Math.random() * char.length)].toUpperCase()
			} else {
				pass += char[Math.floor(Math.random() * char.length)]
			}
		} else {
			pass += number[Math.floor(Math.random() * number.length)]
		}
	}
	return pass
}
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Combien d'utilisateur voulez vous créer ?", (n) => {
	const noms = ["Dubouleau", 	"Lenit","Ioulu","Porta","Justern","Lonéa","Louis","Muparit","Smith","Dupont","Perno","Numera","Loupi","Sidhune","Libranou","Danfair","Drolle","Marrent","Coure","Celc","Houmer","Nun","Sitan","Anvy","Nikou","Mouk","Tam","Ere","Fice","Depu","Tes","Cahnnem","Libretor","Ellepaibai"]
	let prenoms = ["Jean", "Marc","Jacques","Patrick", "Philippe", "Marthe", "Joseline", "Pierre", "Juliette", "Louise", "Justine", "Léa", "Marie", "Anne","Margerithe","Jaqueline","Mathilde","Gabrielle"]
	const start = Date.now();
	console.log('Lancement de la création des utilisateurs...');
	for(o = 0; o < n; o++){
		prenom = prenoms[Math.floor(Math.random() * prenoms.length)]
		nom = noms[Math.floor(Math.random() * noms.length)]
		let password = getPassword(16)
		console.log(`Utilisateur numéro ${o+1} ****************\nPrénom : ${prenom}\nNom : ${nom}\nNom d'utilisateur : ${prenom.toLowerCase()}.${nom.toLowerCase()}\nMot de passe : ${password}\n**********************************`)
	}
	const millis = Date.now() - start;
	console.log(`${n} utilisateurs créés en ${Math.floor(millis/1000)} s ${Math.floor(millis/100)}`);
	rl.close()
})
