var Modal = /** @class */ (function () {
    function Modal(title, body, buttons) {
        this.title = title;
        this.body = body;
        this.buttons = buttons;
        this.cacheDom();
        this.initEvents();
    }
    Modal.prototype.show = function () {
        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modal-title');
        var modalBody = document.getElementById('modal-body');
        var modalFooter = document.getElementById('modal-footer');
        modalTitle.innerHTML = this.title;
        modalBody.innerHTML = this.body;
        modalFooter.innerHTML = '';
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            var buttonElement = document.createElement('button');
            buttonElement.innerHTML = button.text;
            // buttonElement.addEventListener('click', button.callback)
            modalFooter.appendChild(buttonElement);
        }
        modal.style.display = 'flex';
    };
    Modal.prototype.hide = function () {
        var modal = document.getElementById('modal');
        modal.style.display = 'none';
    };
    Modal.prototype.cacheDom = function () {
        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modal-title');
        var modalBody = document.getElementById('modal-body');
        var modalFooter = document.getElementById('modal-footer');
    };
    // todo: refactor this method because it doesnt work like i need it.
    Modal.prototype.initEvents = function () {
        var _this = this;
        var modal = document.getElementById('modal');
        var modalClose = document.getElementById('modal-close');
        modalClose.addEventListener('click', function () {
            _this.hide();
        });
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                _this.hide();
            }
        });
    };
    return Modal;
}());
var ModalButton = /** @class */ (function () {
    function ModalButton(text, callback) {
        this.text = text;
        this.callback = callback;
        this.cacheDom();
        this.initEvents();
    }
    ModalButton.close = function () {
        var modal = document.getElementById('modal');
        modal.style.display = 'none';
    };
    ModalButton.ok = function () {
        ModalButton.close();
    };
    ModalButton.cancel = function () {
        ModalButton.close();
    };
    ModalButton.prototype.cacheDom = function () {
    };
    ModalButton.prototype.initEvents = function () {
    };
    return ModalButton;
}());
