export const settings = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    INVOICE_LIMIT: 8,
    DUMMY_ZIP_URL: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip',
    DUMMY_PDF_URL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    COFFEE_URL:"https://fake-coffee-api.vercel.app/api",
    VOLUNTARIES: [
        { title: "0/month", subtitle: "no data", description: "it's a free option", id: 1 },
        { title: "500/month", subtitle: "base data", description: "it's a middle option", id: 2 },
        { title: "1200/month", subtitle: "all data", description: "it's a premium option", id: 3 },
    ],
    SUBSCRIPTIONS: [
        { title: "free package", subtitle: "", description: "it's a free option", id: 1 },
        { title: "medium package", subtitle: "you have a medium package", description: "it's a medium option", id: 2 },
        { title: "premium package", subtitle: "you have a premium package", description: "it's a premium option", id: 3 },
    ],
    NAV_ITEMS: [
        {name:'Home',path:'/home',icon:'home',ariaLabel:'Home'},
        {name:'Billing',path:'/billing',icon:'monetization_on',ariaLabel:'Billing icon'},
        {name:'Statistics',path:'/statistics',icon:'insights',ariaLabel:'Statistics icon'},
        {name:'Posts',path:'/posts',icon:'menu_book',ariaLabel:'Posts icon'},
        {name:'Users',path:'/users',icon:'people',ariaLabel:'Users icon'},
        {name:'Todos',path:'/todos',icon:'checklist',ariaLabel:'Todos icon'},
        {name:'Tasks',path:'/tasks',icon:'format_list_numbered',ariaLabel:'Tasks icon'},
        {name:'Drag&drop',path:'/dragdrop',icon:'open_with',ariaLabel:'Drag&drop icon'},
        {name:'Coffee',path:'/coffees',icon:'coffee',ariaLabel:'Coffee icon'},
        {name:'Authentication',path:'/auth',icon:'no_encryption',ariaLabel:'Auth icon'},
    ],
}