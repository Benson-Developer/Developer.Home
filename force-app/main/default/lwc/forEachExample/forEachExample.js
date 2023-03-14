import { LightningElement } from 'lwc';

export default class ForEachExample extends LightningElement {
    contacts = [
        {Id:1,
        Name:'Amy Taylor',
        Title: 'VP of Engineering',
        },
        {Id:2,
        Name:'Michael Jones',
        Title: 'VP of Sales',
        },
        {Id:3,
        Name:'Jannifer Wu',
        Title: 'CEO',
        },
        {Id:4,
        Name:'Peter Cheung',
        Title: 'CEO',
        },
        {Id:5,
        Name:'May Wu',
        Title: 'CEO',
        }
    ]
}