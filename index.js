function checkAndHideElements() {
    const adElements = document.getElementsByClassName("GssDD");

    if (adElements.length > 0) {
        const adArray = Array.from(adElements);

        adArray.forEach(element => {
            console.log(`[OutlookSidebarRemover]: Removed ${element}.`)
            element.style.display = 'none';
        });

        clearInterval(intervalId);
    }
}

const intervalId = setInterval(checkAndHideElements, 100);