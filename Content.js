const darkest = "#29313f"
const lighter = "#4b5970"
const text = "white"

function editStyleByClass(classNames, color) {

    for (let n = 0; n < classNames.length; n++) {

        let currentClass = document.getElementsByClassName(classNames[n])

        for (let i = 0; i < currentClass.length; i++) {

            currentClass[i].style.background = color
            currentClass[i].style.color = text
            currentClass[i].style.border = color

        }
    }
}

function editStyleByTag(tag, color) {

    for (let n = 0; n < tag.length; n++) {

        let currentTag = document.getElementsByTagName(tag[n])

        for (let i = 0; i < currentTag.length; i++) {

            currentTag[i].style.background = color
            currentTag[i].style.color = text
            currentTag[i].style.border = color

        }
    }
}

function changeColors() {

    const darkestClassNames = [
        "navbar", "wrapper", "wrap-counts",
        "item-image", "day", "content", "form-control", "product", "all-container", "lessons"
    ]

    const lighterClassNames = [
        "content-progress", "ng-value-container", "inner",
        "count-holder items", "left-block-graph", "header-title-block", "right-block-graph", "body-list", "header", "superbaidge",
        "content-awards", "description-of-awards", "name-spec", "item-header", "item-image", "info-comment", "info-content",
        "ng-arrow-wrapper", "logo", "lessons-block", "video-block", "text-article", "news-container", "date", "modal-content", "big-news-container",
        "date-payment", "name-payment", "summa-payment", "payment-item payment-plan", "payment-item payment-item-buttons", "payment-section item payment-item",
        "payment-item", "sidebar-parent-top-block", "sidebar", "sidebar active", "side-text", "sidebar-nav open-sidebar-nav", "sidebar-content", "content-schedule",
        "day-holder", "content-events", "feedback-col grey-border", "item progress-block", "item profile-achieve no-refs", "conteiner-profile",
        "col-md-11 item password-form-block", "faq-item", "panel-heading card-header", "panel-body card-block card-body", "contacts-block",
        "signal-form-container", "signal-list-container", "product-block", "block-padding", "header-accordion", "my-purchases", "message",
        "toast-success toast ng-trigger ng-trigger-flyInOut", "basket", "minus", "plus out-of-bound",
        "plus", "col-md-12 item", "on-hover", "less-name", "time-place", "name-teacher", "ng-option ng-option-selected", "ng-option ng-option-marked", "ng-option",
        "ng-dropdown-panel-items scroll-host","counts-tooltip","tooltip-inner"
    ]

    const tags = [
        "ul",
    ]

    editStyleByClass(darkestClassNames, darkest)
    editStyleByClass(lighterClassNames, lighter)
    editStyleByTag(tags, lighter)

}
function update() {

    var interval = setInterval(changeColors, 100)


    setTimeout(() => {

        clearInterval(interval)

    }, 5000)
}

window.onmousedown = update

update()

