/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import {config} from '../../wdio.conf.js'
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
         browser.maximizeWindow();
        return browser.url(config.baseUrl);
    }
}
