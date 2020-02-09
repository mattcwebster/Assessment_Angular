export class Employee {
    constructor(
        public name: string,
        public profilePicUri: string,
        public directPhone: string,
        public email: string,
        public fax?: string,
        public title?: string,       
        public status: 'Active' | 'Obsolete' = 'Active',
        public cell?: string,
        public home?: string,
        public homeFax?: string,
        public homeEmail?: string
    ) {}
}
