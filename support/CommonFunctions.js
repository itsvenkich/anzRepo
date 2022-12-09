


export const waitForElementToExist = async(targetelement) =>{
    const WAIT_TIMEOUT = 60000;
    const TIMEOUT_MSG = `Oops ! Element ${targetelement} not exists`;
    await targetelement.waitForExist({
        timeout : WAIT_TIMEOUT,
        timeoutMsg : TIMEOUT_MSG,
    });
    await targetelement.waitForEnabled();
    await targetelement.waitForClickable();

};


export const clickElement = async(targetElement) => {
    waitForElementToExist(targetElement);
    await targetElement.scrollIntoView();
    await targetElement.click();
};

export const setValue = async(targetElement , value) => {
    waitForElementToExist(targetElement);
    await targetElement.setValue(value);
};
