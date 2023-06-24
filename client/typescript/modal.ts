class Modal {
    constructor(
        public title: string,
        public body: string,
        public buttons: ModalButton[]
    ) {
        this.cacheDom()
        this.initEvents()
    }

    show() {
        let modal = document.getElementById('modal')
        let modalTitle = document.getElementById('modal-title')
        let modalBody = document.getElementById('modal-body')
        let modalFooter = document.getElementById('modal-footer')

        modalTitle.innerHTML = this.title
        modalBody.innerHTML = this.body
        modalFooter.innerHTML = ''

        for (let button of this.buttons) {
            let buttonElement = document.createElement('button')
            buttonElement.innerHTML = button.text
            // buttonElement.addEventListener('click', button.callback)
            modalFooter.appendChild(buttonElement)
        }

        modal.style.display = 'flex'
    }

    hide() {
        let modal = document.getElementById('modal')
        modal.style.display = 'none'
    }

    cacheDom() {
        let modal = document.getElementById('modal')
        let modalTitle = document.getElementById('modal-title')
        let modalBody = document.getElementById('modal-body')
        let modalFooter = document.getElementById('modal-footer')
    }

    // todo: refactor this method because it doesnt work like i need it.
    initEvents() {
        let modal = document.getElementById('modal')
        let modalClose = document.getElementById('modal-close')

        modalClose.addEventListener('click', () => {
            this.hide()
        })

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                this.hide()
            }
        })
    }
}

class ModalButton {
    constructor(
        public text: string,
        public callback: Function
    ) {
        this.cacheDom()
        this.initEvents()
    }

    static close() {
        let modal = document.getElementById('modal')
        modal.style.display = 'none'
    }

    static ok() {
        ModalButton.close()
    }

    static cancel() {
        ModalButton.close()
    }

    cacheDom() {

    }

    initEvents() {

    }
}
