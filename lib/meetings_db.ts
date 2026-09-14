import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        openingHymn: { number: 2, title: 'The spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{description: 'Sustaining of new Primary president'}],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'In remebreance of Thy Suffering'},
        speakers: [
            { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker'},
            { name: 'Youth Choir', topic: '', type: 'musical-number'},
        ],
        closingHymn: { number: 31, title: 'O God, Our help in Ages Past '},
        closingPrayer: 'Brother Davis',
        announcements: ['Ward temple night: May 10' ]
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Bishop Smith',
        openingHymn: { number: 167, title: 'God is the best' },
        openingPrayer: 'Brother Glover',
        wardBusiness: [{description: 'The announcement of the new ward clerk'}],
        stakeBusiness: true,
        sacramentHymn: { number: 36, title: 'Jesus died on the cross'},
        speakers: [
            { name: 'Sister Andersen', topic: 'Repentance', type: 'speaker'},
            { name: 'Brother Johnson', topic: 'God is the best', type: 'speaker'},
        ],
        closingHymn: { number: 295, title: 'See you again next Sunday'},
        closingPrayer: 'Brother Callum',
        announcements: ['Youth conference next weekend' ]
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Martinez',
        openingHymn: { number: 27, title: 'O Thou Kind and Gracious Father' },
        openingPrayer: 'Sister Thompson',
        wardBusiness: [{description: 'Fast and testimony meeting'}],
        stakeBusiness: false,
        sacramentHymn: { number: 170, title: 'While of These Emblems We Partake'},
        speakers: [
            { name: 'Missionaries', topic: 'Service and Dedication', type: 'speaker'},
            { name: 'Primary Children', topic: '', type: 'musical-number'},
        ],
        closingHymn: { number: 127, title: 'O Happy Home' },
        closingPrayer: 'Brother Rodriguez',
        announcements: ['Sacrament meeting at 10:00 AM']
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Bishop Smith',
        openingHymn: { number: 3, title: 'Praise to the Man' },
        openingPrayer: 'Brother Wilson',
        wardBusiness: [{description: 'Approval of new missionary'}],
        stakeBusiness: false,
        sacramentHymn: { number: 176, title: 'O Jesu, Thou Son of God'},
        speakers: [
            { name: 'High Council Member', topic: 'Temple Preparation', type: 'speaker'},
            { name: 'Youth Choir', topic: '', type: 'musical-number'},
        ],
        closingHymn: { number: 305, title: 'Come, Join the Choir' },
        closingPrayer: 'Sister Garcia',
        announcements: ['Temple open house this Saturday']
    },
    {
        id: 5,
        date: '2026-05-31',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        openingHymn: { number: 81, title: 'Guide Us, O Thou Great Jehovah' },
        openingPrayer: 'Sister Taylor',
        wardBusiness: [{description: 'Bishopric counselor release and call'}],
        stakeBusiness: false,
        sacramentHymn: { number: 174, title: 'O Lamb of God'},
        speakers: [
            { name: 'Stake President', topic: 'Leading with Faith', type: 'speaker'},
            { name: 'Ward Choir', topic: '', type: 'musical-number'},
        ],
        closingHymn: { number: 294, title: 'Behold the Great Redeemer Die' },
        closingPrayer: 'Brother Santos',
        announcements: ['Ward party next Friday at 6 PM']
    },
    {
        id: 6,
        date: '2026-09-13',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        openingHymn: { number: 81, title: 'Guide Us, O Thou Great Jehovah' },
        openingPrayer: 'Sister Taylor',
        wardBusiness: [{description: 'Bishopric counselor release and call'}],
        stakeBusiness: false,
        sacramentHymn: { number: 174, title: 'O Lamb of God'},
        speakers: [
            { name: 'Stake President', topic: 'Leading with Faith', type: 'speaker'},
            { name: 'Ward Choir', topic: '', type: 'musical-number'},
        ],
        closingHymn: { number: 294, title: 'Behold the Great Redeemer Die' },
        closingPrayer: 'Brother Santos',
        announcements: ['Ward party next Friday at 6 PM']
    },
];

export function getMeetings(date?: string | null) : SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}

export function getMeetingById(id: number) : SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}