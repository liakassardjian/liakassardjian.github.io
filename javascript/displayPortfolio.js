function displayPortfolio() {
    var langIndex = 0
    if (lang == "pt") {
        langIndex = 1
    }

    const section = document.getElementById("portfolio");
    const row = createCustomElement("div", "row"); 

    for (var i = 0; i < apps.length; i++) {
        row.appendChild(createCard(apps[i][langIndex]));
    }

    section.appendChild(row);
}

function createCard(app) {
    const column = createCustomElement("div", "card-column col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch");
    const card = createCustomElement("div", "card border-0");
    
    const image = createCustomElement("img", "card-img-top");
    image.src = app.imagePath;
    image.alt = app.name + " icon";
    card.appendChild(image);

    card.appendChild(createCardBody(app));
    card.appendChild(createCardFooter(app));
    column.appendChild(card);

    return column;
}

function createCardFooter(app) {
    const cardFooter = createCustomElement("div", "card-footer border-0");
    const textLine = createCustomElement("h5", "");

    const hasAppStoreLink = (app.appStoreLink != "");
    const hasGitHubLink = (app.gitHubLink != "");
    const hasYoutubeLink = (app.youtubeLink != "");

    if (hasAppStoreLink) {
        textLine.appendChild(createLink(app.appStoreLink, "App Store"));   
    }

    if (hasGitHubLink) {
        textLine.appendChild(createLink(app.gitHubLink, "GitHub", hasAppStoreLink));
    }

    cardFooter.appendChild(textLine);
    return cardFooter;

}

function createCardBody(app) {
    const cardBody = createCustomElement("div", "card-body");

    const appName = createCustomElement("h3", "card-title");
    appName.innerHTML = app.name;
    cardBody.appendChild(appName);

    cardBody.appendChild(createOSLabel(app.platforms));

    const appDescription = createCustomElement("p", "card-text");
    appDescription.innerHTML = app.description;
    cardBody.appendChild(appDescription);

    cardBody.appendChild(createTextGroup("Roles", app.roles));
    cardBody.appendChild(createTextGroup("Applied technologies", app.development));

    return cardBody;
}

function createTextGroup(title, body) {
    const group = createCustomElement("div", "text-group");

    const titleElement = createCustomElement("h6", "font-weight-bold");
    titleElement.innerHTML = title;

    const bodyElement = createCustomElement("p", "");
    bodyElement.innerHTML = body;

    group.appendChild(titleElement);
    group.appendChild(bodyElement);
    return group;
}

function createLink(url, label, spacing = false) {
    var className = "badge badge-pill badge-light";
    if (spacing) {
        className += " ml-2";
    }

    const link = createCustomElement("a", className);
    link.href = url;
    link.innerHTML = label;
    return link;
}

function createOSLabel(os) {
    const p = document.createElement("p");
    const small = document.createElement("small");

    small.innerHTML = os;
    p.appendChild(small);

    return p;
}

function createCustomElement(elementName, className) {
    const element = document.createElement(elementName);
    element.className = className;
    return element
}