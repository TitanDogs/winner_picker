import fs from "fs";

const start = () => {
    try {
        let jsonFolder = "./json/";
        let jsonFiles = fs.readdirSync(jsonFolder);
        let fileName = jsonFiles[0];
    
        if (fileName) {
            let buffer = fs.readFileSync(`${jsonFolder}/${fileName}`);
            let list = JSON.parse(buffer);

            if (list && list.length > 0) {
                let randomNumber = Math.floor(Math.random() * list.length);
                let winner = list[randomNumber];
                console.log("");
                console.log("And the winner is:")
                console.log(`Index ${randomNumber}`);
                console.log("");
                console.log(winner);
            } else {
                throw "No array exits in this file.";
            }
        } else {
            throw "No file in the json folder.";
        }
    } catch (err) {
        console.log(err)
    }
}

start()