class Contact {
    constructor(name, mail, num) {
        this.name = name;
        this.mail = mail;
        this.num = num;
    }
}

class ContactBook {
    constructor() {
        this.contacts = JSON.parse(localStorage.getItem("contacts")) || []
    }

    addContact(name, mail, num) {
        const contact = new Contact(name, mail, num)
        this.contacts.push(contact)
        localStorage.setItem("contacts", JSON.stringify(this.contacts))
    }

    removeContact(index) {
        this.contacts.splice(index, 1)
        localStorage.setItem("contacts", JSON.stringify(this.contacts))
    }

    getContacts() {
        return this.contacts
    }
}


const book = new ContactBook()
book.addContact("Arstan", "arsa@gmail.com", "996707-01-84-84")
book.addContact("Beka", "beks@gmail.com", "996777-77-77-77")
console.log(book.getContacts())
book.removeContact(0)
console.log(book.getContacts())
