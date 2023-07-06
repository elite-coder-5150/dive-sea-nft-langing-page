// @ts-ignore
import { ScreenResolutionDetector } from './screen-resolution-detector';
export class App {
    public srd;
    public className: string = 'test';
    public container;

    init() {
        this.cacheDom()
        this.initEvents()

        this.srd = new ScreenResolutionDetector();
    }

    cacheDom() {
        this.container = document.querySelector('.container');
    }

    initEvents() {}

    public addClass(elem) {
        const resolution = this.srd.getResolution();
        const ua = this.srd.getUseragent();
        if (resolution.width < 768) {
            elem.classList.add('small');

            if (!(this.container.classList.contains('.iphone'))) {
                this.container.classList.add('iphone');
            } else if (!(this.container.classList.contains('.android'))) {
                this.container.classList.add('android');
            } else if (!(this.container.classList.container('.iphone-landscape'))) {
                this.container.classList.add('iphone-landscape');
            } else if (!(this.container.classList.container('.android-landscape'))) {
                this.container.classList.add('android-landscape');
            } else if (!(this.container.classList.container('.ipad'))) {
                this.container.classList.add('ipad');
            } else if (!(this.container.classList.container('.ipad-landscape'))) {
                this.container.classList.add('ipad-landscape');
            } else if (!(this.container.classList.contains('.android-tablet'))) {
                this.container.classList.add('android-tablet');
            } else if (!(this.container.classList.contains('.android-tablet-landscape'))) {
                this.container.classList.add('android-tablet-landscape');
            }
        }
        elem.classList.add(this.className);
    }

    public getUseragent() {
        return navigator.userAgent;
    }
}

const app = new App()
app.init();
app.addClass(app.className)
