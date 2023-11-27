const accordionItemHeaders = document.querySelectorAll(".accordion--item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxWidth = accordionItemBody.scrollWidth + "px";
        }
        else {
            accordionItemBody.style.maxWidth = 0;
        }

    });
});