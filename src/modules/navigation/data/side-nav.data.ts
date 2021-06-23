import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        items: ['dashboard', 'mypage', 'smartfactory', 'notice', 'project', 'management'],
    },
    {
        items: ['layouts','charts', 'tables', 'pages'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    mypage: {
        icon: 'address-card',
        text: '마이페이지',
        submenu: [
            {
                text: '내 정보',
                link: '/mypage/myprofile',
            },
            {
                text: '내 근태 관리',
                link: '/mypage/workrecord',
            },
            {
                text: '내 일정 관리',
                link: '/mypage/schedule'
            },
            {
                text: '내 쪽지',
                link: '/mypage/memo'
            },
        ],
    },
    smartfactory: {
        icon: 'industry',
        text: '스마트팩토리관리',
        submenu: [
            {
                text: '기본정보관리',
                link: '/smartfactory/company'
            },
            {
                text: '서버 관리',
                link: '/smartfactory/server'
            },
            {
                text: 'DB 관리',
                link: '/smartfactory/db'
            },
            {
                text: '모니터링',
                link: '/smartfactory/monitoring'
            },
            {
                text: 'IOT 기기관리',
                link: '/smartfactory/iot'
            },
        ]
    },
    notice: {
        icon: 'scroll',
        text: '공지사항',
        link: '/notice'
    },
    project: {
        icon: 'book-open',
        text: '프로젝트',
        link: '/project'
    },
    management: {
        icon: 'user',
        text: '공통정보관리',
        submenu: [
            {
                text: '사원관리',
                link: '/management/member'
            },
            {
                text: '소속관리',
                link: '/management/company'
            },
            {
                text: '부서관리',
                link: '/management/department'
            },
            {
                text: '근태관리',
                link: '/management/work'
            },
            {
                text: '코드관리',
                link: '/management/code'
            },
        ]
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
};