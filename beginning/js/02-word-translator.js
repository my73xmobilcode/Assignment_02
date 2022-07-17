let lanCode = prompt("Enter the languaje code \"es\", \"de\", \"en\", and \"fr\". ");
switch (lanCode) {
    case "es":		
        document.write("Hello World translated in Spanish is: hola mundo");
        break;
    case "de":
        document.write("Hello World translated in German is: hallo welt");
        break;
    case "en":
        document.write("Hello World translated in English is: hello world");
        break;    
    case "fr":
        document.write("Hello World translated in French is: Bonjour le monde");
		break;
    default:
        document.write("Hello World translated in English is: hello world");
}
