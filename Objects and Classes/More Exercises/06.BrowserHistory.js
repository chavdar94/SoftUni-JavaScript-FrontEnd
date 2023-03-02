function solve(browser, commands) {

    for (const command of commands) {
        let action;
        let site;

        if (command !== 'Clear History and Cache') {
            [action, site] = command.split(' ');
        } else {
            action = command;
        }

        if (action === 'Open') {
            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(command);

        } else if (action === 'Close') {
            if (browser['Open Tabs'].includes(site)) {
                let siteIndex = browser['Open Tabs'].indexOf(site);
                browser['Open Tabs'].splice(siteIndex, 1);
                browser['Recently Closed'].push(site);
                browser['Browser Logs'].push(command);
            }
        } else {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }

    }

    let browserName = browser['Browser Name'];
    delete browser["Browser Name"];
    console.log(browserName);
    for (const [key, value] of Object.entries(browser)) {
        console.log(`${key}: ${value.join(', ')}`);
    }
}

solve({
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);