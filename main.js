class Storage{
    constructor (name, storage, defaultValue){
        this.name = name;
        this.storage = storage;
        this.storage.setItem(this.name, JSON.stringify(defaultValue));
    }
    get(){
        return JSON.parse(this.storage.getItem(this.name));
    }
    set(value){
        this.storage.setItem(this.name, JSON.stringify(value));
    }

    clear(){
        this.storage.removeItem(this.name);
    }
    isEmpty(){
        return (this.get() == null || this.get() == undefined) ? true : false;
    }
}
const moscow = new Storage('moscow', localStorage, 26589);
const rome = new Storage('rome', localStorage, 69);
rome.set('Hello')
console.log(rome.get())
console.log(moscow.get());
moscow.set(undefined);
//moscow.clear();
console.log(moscow.get());
console.log(moscow.isEmpty());

