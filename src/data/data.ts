import { Logo } from './logo.model';
import { WorkExperience } from './workex.model';
import { EducationHistory } from './educationHistory.model';

export const listEducationHistory: EducationHistory[] = [
    {
        schoolName: 'FPT POLYTECHNIC COLLEGE',
        major: 'Software Engineering',
        graduateYear: 2015,
        activities: [
            'One of 8 seeds in the software engineering program at FPT Member',
            'Video Game Society Member',
            'Student IT Helpdesk',
        ],
    },
    {
        schoolName: 'RMIT VIETNAM UNIVERSITY',
        major: 'Bachelor of Information Technology',
        graduateYear: 2021,
        activities: [
            'Member of Boardgame Club',
            'Member of Student Ambassadors',
            'Member of Badminton Club',
        ],
    },
];
export const listLogo: Logo[] = [
    { name: 'angular', path: 'angular-logo' },
    { name: 'react', path: 'react-logo' },
    { name: 'redux', path: 'redux-logo' },
    { name: 'express', path: 'express-logo' },
];
export const listKeyAreaDesc: string[] = [
    'React, Redux, Expressjs, Angular and Web API experience',
    'Familiar with MERN stack',
    'Hands-on No-SQL and SQL experience',
];

export const listWorkEx: WorkExperience[] = [
    {
        name: 'Real Estate Website',
        year: 2018,
        listDescription: [
            'Create back-end with Expressjs and MongoDB',
            'Build front-end with React and Redux',
        ],
        listTechnology: ['react', 'redux', 'express'],
    },
    {
        name: 'Coin Game',
        year: 2019,
        listDescription: [
            'Build with Java language',
            'Use Java Swing framework for UI',
        ],
        listTechnology: ['java', 'java-swing'],
    },
    {
        name: 'Forum Website',
        year: 2019,
        listDescription: [
            'Use Ruby on rails framework for back-end',
            'Use HTML and CSS for front-end',
        ],
        listTechnology: ['ruby', 'ruby-on-rails', 'html', 'css'],
    },
    {
        name: 'Clean-Up Android Application',
        year: 2020,
        listDescription: [
            'Use Java language for UI',
            'Use Firebase for back-end',
        ],
        listTechnology: ['java', 'android', 'firebase'],
    },
];
