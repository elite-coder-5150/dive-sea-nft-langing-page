class ContactForm {
    name: HTMLElement;
    email: HTMLElement;
    message: HTMLElement;

    constructor() {
        this.cacheDom()
        this.initEvents()
    }

    cacheDom() {
        this.name = document.getElementById('name')
        this.email = document.getElementById('email')
        this.message = document.getElementById('message')
    }

    initEvents() {
        this.name.addEventListener('keyup', () => {
            // this.validateName()
        })

        this.email.addEventListener('keyup', () => {
            // this.validateEmail()
        })

        this.message.addEventListener('keyup', () => {
            // this.validateMessage()
        })
    }

    /**
    validateName() {
        if (this.name.value.length < 3) {
            this.name.classList.add('is-invalid')
        } else {
            this.name.classList.remove('is-invalid')
        }
    }

    validateEmail() {
        if (this.email.value.length < 3) {
            this.email.classList.add('is-invalid')
        } else {
            this.email.classList.remove('is-invalid')
        }
    }

    validateMessage() {
        if (this.message.value.length < 3) {
            this.message.classList.add('is-invalid')
        } else {
            this.message.classList.remove('is-invalid')
        }
    }

    validate() {
        this.validateName()
        this.validateEmail()
        this.validateMessage()
    } */
}
