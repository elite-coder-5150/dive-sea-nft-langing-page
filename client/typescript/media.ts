// @ts-ignore
import { Database } from '../server/database/database';
//? q: how do i create an enum called screen size?
enum ScreenSize {
    Small = 1,
    Medium = 2,
    Large = 3
};

class ScreenResolutionDetector {
    public width:number = 0;
    public height:number = 0;
    public db: Database;

    constructor() {
        this.db = Database.getInstance();
    }
    public getResolution() {
        this.width = window.screen.width;
        this.height = window.screen.height;

        return {
            width: this.width,
            height: this.height
        }
    }
    
    public getOrientation(width) {
        const resolution = this.getResolution();
        console.log(`device resolution: ${resolution.width} x ${resolution.height}`)
    }


}

const srd = new ScreenResolutionDetector();
const resolution = srd.getResolution();
console.log(resolution.width, resolution.height);
srd.getOrientation(resolution.width);
