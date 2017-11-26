function shareLink(url) {
    const mailtoUrl = new URL('mailto:');
    mailtoUrl.searchParams.set('body', url);
    browser.tabs.create({url: mailtoUrl.toString(), active: false})
        .then(tab => browser.tabs.remove(tab.id));
}

browser.contextMenus.create({
    type: 'normal',
    title: browser.i18n.getMessage('emailLinkContextMenu'),
    contexts: ['link'],
    onclick: (info) => shareLink(info.linkUrl),
});

browser.contextMenus.create({
    type: 'normal',
    title: browser.i18n.getMessage('emailPageLinkContextMenu'),
    contexts: ['page'],
    onclick: (info) => shareLink(info.pageUrl),
});

browser.contextMenus.create({
    type: 'normal',
    title: browser.i18n.getMessage('emailFrameLinkContextMenu'),
    contexts: ['frame'],
    onclick: (info) => shareLink(info.frameUrl),
});

