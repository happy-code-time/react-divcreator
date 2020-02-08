export default class UrlExtractor {

    constructor(urlObject) {
       this.extract = this.extract.bind(this);
        this.urlLocation = urlObject ? urlObject : {};
        this.url = {
            keyAndValuePairs: [],
            keys: [],
            values: [],
            path: []
        };
        this.tmpKeyAndValuePairs = [];
        this.tmpKeys = [];
        this.tmpValues = [];
        this.tmpPath = [];
    }

    extract() {
        const self = this;
        
        if (this.urlLocation.path && this.urlLocation.path.length) {
            let current_url_path_splited = this.urlLocation.path.split("/");
            if (current_url_path_splited && current_url_path_splited.length) {
                for (let x = 0; x <= current_url_path_splited.length - 1; x++) {
                    let currentUrlPathSplittedORIGIN = current_url_path_splited[x];
                    if (current_url_path_splited[x]) {
                        if (-1 == self.tmpPath.indexOf(decodeURIComponent(current_url_path_splited[x]))) {
                            self.tmpPath.push(
                                decodeURIComponent(current_url_path_splited[x])
                            );
                        }
                    }
                    /**
                     * Split value by /
                     */
                    current_url_path_splited[x] = decodeURIComponent(currentUrlPathSplittedORIGIN);
                    let splitedPathToCheck = current_url_path_splited[x].split("/");
                    if (splitedPathToCheck && splitedPathToCheck.length) {
                        for (let xa = 0; xa <= splitedPathToCheck.length - 1; xa++) {
                            if (splitedPathToCheck[xa]) {
                                self.tmpPath.push(decodeURIComponent(splitedPathToCheck[xa]));
                            }
                        }
                    }
                    /**
                     * Split value by ?
                     */
                    current_url_path_splited[x] = decodeURIComponent(currentUrlPathSplittedORIGIN);
                    splitedPathToCheck = current_url_path_splited[x].split("?");
                    if (splitedPathToCheck && splitedPathToCheck.length) {
                        for (let xa = 0; xa <= splitedPathToCheck.length - 1; xa++) {
                            if (splitedPathToCheck[xa]) {
                                self.tmpPath.push(decodeURIComponent(splitedPathToCheck[xa]));
                            }
                        }
                    }
                    /**
                     * Split value by =
                     */
                    current_url_path_splited[x] = decodeURIComponent(currentUrlPathSplittedORIGIN);
                    splitedPathToCheck = current_url_path_splited[x].split("=");
                    if (splitedPathToCheck && splitedPathToCheck.length) {
                        for (let xa = 0; xa <= splitedPathToCheck.length - 1; xa++) {
                            if (splitedPathToCheck[xa]) {
                                self.tmpPath.push(decodeURIComponent(splitedPathToCheck[xa]));
                            }
                        }
                    }
                    /**
                     * Split value by .
                     */
                    current_url_path_splited[x] = decodeURIComponent(currentUrlPathSplittedORIGIN);
                    splitedPathToCheck = current_url_path_splited[x].split(".");
                    if (splitedPathToCheck && splitedPathToCheck.length) {
                        for (let xa = 0; xa <= splitedPathToCheck.length - 1; xa++) {
                            if (splitedPathToCheck[xa]) {
                                self.tmpPath.push(decodeURIComponent(splitedPathToCheck[xa]));
                            }
                        }
                    }
                }
            }
        }
        if (this.urlLocation.search && this.urlLocation.search.length) {
            let temp = this.urlLocation.search.split("?");
            if (Array === temp.constructor && temp.length) {
                for (let x = 0; x <= temp.length - 1; x++) {
                    if (temp[x]) {
                        let parentItems = temp[x].split("&");
                        if (parentItems && parentItems.length) {
                            for (let xa = 0; xa <= parentItems.length - 1; xa++) {
                                if (parentItems[xa]) {
                                    if (-1 == self.tmpKeyAndValuePairs.indexOf(decodeURIComponent(parentItems[xa]))) {
                                        self.tmpKeyAndValuePairs.push(decodeURIComponent(parentItems[xa]));
                                    }
                                    let childsChildren = parentItems[xa].split("=");
                                    if (childsChildren && 1 <= childsChildren.length) {
                                        if (childsChildren[0]) {
                                            if (-1 == self.tmpKeys.indexOf(decodeURIComponent(childsChildren[0]))) {
                                                self.tmpKeys.push(decodeURIComponent(childsChildren[0]));
                                            }
                                        }
                                        for (let xav = 0; xav <= childsChildren.length - 1; xav++) {
                                            let childsChildrenORIGIN = childsChildren[xav];
                                            if (childsChildren[xav] && !self.tmpKeys.includes(childsChildren[xav])) {
                                                if (-1 == self.tmpValues.indexOf(decodeURIComponent(childsChildren[xav]))) {
                                                    self.tmpValues.push(decodeURIComponent(childsChildren[xav]));
                                                }
                                                /**
                                                 * Split value by /
                                                 */
                                                childsChildren[xav] = decodeURIComponent(childsChildrenORIGIN);
                                                let childsChildrenValue = childsChildren[xav].split("/");
                                                if (childsChildrenValue && childsChildrenValue.length) {
                                                    for (let xa = 0; xa <= childsChildrenValue.length - 1; xa++) {
                                                        if (childsChildrenValue[xa]) {
                                                            if (!self.tmpValues.includes(decodeURIComponent(childsChildrenValue[xa]))) {
                                                                self.tmpValues.push(decodeURIComponent(childsChildrenValue[xa]));
                                                            }
                                                        }
                                                        /**
                                                         * Split value by ?
                                                         */
                                                        let childsChildrenValue2 = childsChildrenValue[xa].split("?");
                                                        if (childsChildrenValue2 && childsChildrenValue2.length) {
                                                            for (let xab = 0; xab <= childsChildrenValue2.length - 1; xab++) {
                                                                if (childsChildrenValue2[xab]) {
                                                                    self.tmpValues.push(decodeURIComponent(childsChildrenValue2[xab]));
                                                                }
                                                                /**
                                                                 * Split value by =
                                                                 */
                                                                let childsChildrenValue3 = childsChildrenValue2[xab].split("=");
                                                                if (childsChildrenValue3 && childsChildrenValue3.length) {
                                                                    for (let xac = 0; xac <= childsChildrenValue3.length - 1; xac++) {
                                                                        if (childsChildrenValue3[xac]) {
                                                                            self.tmpValues.push(decodeURIComponent(childsChildrenValue3[xac]));
                                                                        }
                                                                        /**
                                                                         * Split value by .
                                                                         */
                                                                        let childsChildrenValue4 = childsChildrenValue3[xac].split(".");
                                                                        if (childsChildrenValue4 && childsChildrenValue4.length) {
                                                                            for (let xad = 0; xad <= childsChildrenValue4.length - 1; xad++) {
                                                                                if (childsChildrenValue4[xad]) {
                                                                                    self.tmpValues.push(decodeURIComponent(childsChildrenValue4[xad]));
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        /**
                                                         * Split value by =
                                                         */
                                                        childsChildrenValue2 = childsChildrenValue[xa].split("=");
                                                        if (childsChildrenValue2 && childsChildrenValue2.length) {
                                                            for (let xac = 0; xac <= childsChildrenValue2.length - 1; xac++) {
                                                                if (childsChildrenValue2[xac]) {
                                                                    self.tmpValues.push(decodeURIComponent(childsChildrenValue2[xac]));
                                                                }
                                                            }
                                                        }
                                                        /**
                                                         * Split value by =
                                                         */
                                                        childsChildrenValue2 = childsChildrenValue[xa].split(".");
                                                        if (childsChildrenValue2 && childsChildrenValue2.length) {
                                                            for (let xac = 0; xac <= childsChildrenValue2.length - 1; xac++) {
                                                                if (childsChildrenValue2[xac]) {
                                                                    self.tmpValues.push(decodeURIComponent(childsChildrenValue2[xac]));
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                /**
                                                 * Split value by .
                                                 */
                                                childsChildren[xav] = decodeURIComponent(childsChildrenORIGIN);
                                                childsChildrenValue = childsChildren[xav].split(".");
                                                if (childsChildrenValue && childsChildrenValue.length) {
                                                    for (let xa = 0; xa <= childsChildrenValue.length - 1; xa++) {
                                                        if (childsChildrenValue[xa]) {
                                                            self.tmpValues.push(decodeURIComponent(childsChildrenValue[xa]));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.urlLocation.hash && this.urlLocation.hash.length) {
            let hashed = this.urlLocation.hash.split("#");
            let hashArray = new Array();
            if (hashed && 1 <= hashed.length) {
                hashed.forEach(function (entry) {
                    if (entry) {
                        hashArray = entry.split("/");

                        if (hashArray && hashArray.length && "object" === typeof hashArray) {
                            hashArray.forEach(function (hashAsPath) {
                                if (hashAsPath) {
                                    if (-1 == self.tmpPath.indexOf(decodeURIComponent(hashAsPath))) {
                                        self.tmpPath.push(decodeURIComponent(hashAsPath));
                                    }
                                }
                            });
                        } 
                        
                        else {
                            if (-1 == self.tmpPath.indexOf(decodeURIComponent(entry))) {
                                self.tmpPath.push(decodeURIComponent(entry));
                            }
                        }
                    }
                });
            }
        }

        self.urlLocation.allEntrys = [];
        self.url.keyAndValuePairs = self.tmpKeyAndValuePairs;
        self.url.keys = self.tmpKeys;
        self.url.values = self.tmpValues;
        self.url.path = self.tmpPath;

        self.addToUrlArray([this.urlLocation.host]);

        if (self.url.path.length) {
            self.addToUrlArray(self.url.path);
        }

        if (self.url.keyAndValuePairs.length) {
            self.addToUrlArray(self.url.keyAndValuePairs);
        }

        if (self.url.keys.length) {
            self.addToUrlArray(self.url.keys);
        }
        
        if (self.url.values.length) {
            self.addToUrlArray(self.url.values);
        }
    }
    /**
     * 
     */
    addToUrlArray(array) {
        for (let x = 0; x <= array.length - 1; x++) {
            if (!this.urlLocation.allEntrys.includes(array[x])) {
                this.urlLocation.allEntrys.push(array[x]);
            }
        }
    }
    /**
     * Get extracted url objects
     */
    getExtractedUrlAllEntrys(){
        return this.urlLocation.allEntrys;
    }
    /**
     * Get extracted url key and value pairs
     */
    getExtractedUrlKeyAndValuePairs(){
        return this.url.keyAndValuePairs;
    }
    /**
     * Get extracted url path
     */
    getExtractedUrlPath(){
        return this.url.path;
    }
    /**
     * Get extracted url keys
     */
    getExtractedUrlKeys(){
        return this.url.keys;
    }
    /**
     * Get extracted url values
     */
    getExtractedUrlValues(){
        return this.url.values;
    }
}