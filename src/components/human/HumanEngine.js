'use strict';

import StomachModel from './models/StomachModel.js';

class HumanEngine {
    constructor() {
        this.stomach = new StomachModel();
    }
    
}

export {HumanEngine};