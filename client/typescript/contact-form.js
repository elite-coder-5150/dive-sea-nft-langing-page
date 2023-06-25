var ContactForm = /** @class */ (function () {
    function ContactForm() {
        this.cacheDom();
        this.initEvents();
    }
    ContactForm.prototype.cacheDom = function () {
        this.name = document.getElementById('name');
        this.email = document.getElementById('email');
        this.message = document.getElementById('message');
    };
    ContactForm.prototype.initEvents = function () {
        this.name.addEventListener('keyup', function () {
            // this.validateName()
        });
        this.email.addEventListener('keyup', function () {
            // this.validateEmail()
        });
        this.message.addEventListener('keyup', function () {
            // this.validateMessage()
        });
    };
    return ContactForm;
}());
