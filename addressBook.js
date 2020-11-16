const firstNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const lastNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const addressRegex=new RegExp("[a-z]{4,}");
const cityRegex=new RegExp("[a-z]{4,}");
const stateRegex=new RegExp("[a-z]{4,}");
const zipRegex=new RegExp("^[0-9]{6}$");
const phoneRegex=new RegExp("[0-9]{2}[\\s][0-9]{10}");
const emailRegex=new RegExp("^[a-z0-9A-Z]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9A-Z]+\\.([a-z]{2,6})+((\\.[a-zA-Z]{2,6})?)$");
const prompt=require('prompt-sync')();

class Contact{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    toString(){
        return "First Name: "+this.firstName+", Last Name: "+this.lastName+
        ", Address: "+this.address+", City: "+this.city+", State: "+this.state+
        ", Zip: "+this.zip+", Phone Number "+this.phoneNumber+", Email: "+this.email;
    }
    set firstName(firstName){
        if(firstNameRegex.test(firstName))
            this._firstName=firstName;
        else throw "invalid first name ";
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(lastName){
        if(lastNameRegex.test(lastName))
            this._lastName=lastName;
        else throw "invalid last name";
    }
    get lastName(){
        return this._lastName;
    }
    set address(address){
        if(addressRegex.test(address))
            this._address=address;
        else throw "invalid address";
    }
    get address(){
        return this._address;
    }
    set city(city){
        if(cityRegex.test(city))
            this._city=city;
        else throw "invalid city name";
    }
    get city(){
        return this._city;
    }
    set state(state){
        if(stateRegex.test(state))
            this._state=state;
        else throw "invalid state";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        if(zipRegex.test(zip))
            this._zip=zip;
        else throw "invalid zip code";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "invalid phone number";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        if(emailRegex.test(email))
            this._email=email;
        else throw "invalid email";
    }
    get email(){
        return this._email;
    }
    
}
let contactArray=new Array();


function findContact(firstName,lastName){
    let contactFound;
    contactArray.forEach(contact=>{
        if(contact.firstName==firstName && contact.lastName==lastName)
            contactFound=contact;
    });
    return contactFound;
}
function editContact(firstName,lastName){
    contact=findContact(firstName,lastName);
    console.log("contact found"+contact);

    console.log("1.Edit address");
    console.log("2.Edit city");
    console.log("3.Edit state");
    console.log("4.Edit zip");
    console.log("5.Edit phone number");
    console.log("6.Edit email");
    let choice=parseInt(prompt("Choose any field "));
    switch(choice){
        case 1: address=prompt("Enter address for updation ");
                contact.address=address;
                break;
        case 2: city=prompt("Enter city for updation ");
                contact.city=city;
                break;
        case 3: state=prompt("Enter state for updation ");
                contact.state=state;
                break;
        case 4: zip=prompt("Enter zip for updation ");
                contact.zip=zip;
                break;
        case 5: phoneNumber=prompt("Enter phone number for updation ");
                contact.phoneNumber=phoneNumber;
                break;
        case 6: email=prompt("Enter email for updation ");
                contact.email=email;
                break;
        default: console.log("no updation ");
    }
}

function deleteContact(firstName,lastName){
    for(let i=0;i<contactArray.length;i++){
        if(contactArray[i].firstName==firstName && contactArray[i].lastName==lastName){
            contactArray.splice(i,i+1);
            return;
        }
    }
}

try{
    let contact1=new Contact("Neeraj","Kumar","indrapuri","patna","bihar",800024,"91 9900887766","abc@gmail.com");
    let contact2=new Contact("Neeraj","Kumar","indrapuri","patna","bihar",800024,"91 9900887766","abc@gmail.com");
    let contact3=new Contact("Neeraj","Kumar","indrapuri","patna","bihar",800024,"91 9900887766","abc@gmail.com");

    contactArray.push(contact1);
    contactArray.push(contact2);
    contactArray.push(contact3);
}catch(exception){
    console.log(exception)
}

deleteContact("Neeraj","Kumar");
console.log("After deletion");
console.log(contactArray);

