import {Config} from "./config" 

class Tare{
    username: String
    commands: Array<String> = ["pull", "push", "collect", "add", "help"]

    constructor(username: String = "stesan") {
        this.username = username
    }
    init(){
        const args: Array<String> = process.argv.slice(2)
        const arg: String = args[0]
        if(args.length != 1){
            this.printHelp("Error: Number of argument is invalid")
            return -1
        }
        if(this.commands.every(v => v != arg)){
            this.printHelp("Error: Command not found")
            return -1
        }
        if(arg == "help"){
            this.printHelp()
            return 0
        }
        if(arg == "pull"){
            //todo
            // check if config directory is a valid git repo
            // if not clone from prompted repo
            // if yes pull
            // and apply configs
        }
        if(arg == "push"){
            //todo
            // initialize or add files in config directory to git
            // and push to git repo
            // or prompt user to set repo
        }
        if(arg == "collect"){
            //todo
            // see config/config.json file
            // and copy files into config/{name}/something
        }
        if(arg == "add"){
            //todo
            // edit config/config.json file
            // something user-interactive
        }

    }
    printHelp(additionalInfo: String = "") {
        console.log(additionalInfo)
        console.log("Usage: yarn start [ pull | push | collect | help ]")
        console.log("  pull     Pulls config from somewhere on the internet")
        console.log("  push     Pushes config to somewhere on the internet")
        console.log("  collect  Collects configs from your disk")
        console.log("  add      Adds a config to store")
        console.log("  help     Showes this help")

    }
}

const Tare1 = new Tare();
Tare1.init()