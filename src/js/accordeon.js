const accordionItemHeaders = document.querySelectorAll(".accordion--item-header");

export const handleClickAccordeon = (accordionItemHeader) => {
    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollWidth + "px";
    }
    else {
        accordionItemBody.style.maxHeight = 0;
    }
}

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        handleClickAccordeon(accordionItemHeader)

    });
});