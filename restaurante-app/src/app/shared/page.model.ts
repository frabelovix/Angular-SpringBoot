export class Page {
    content: Array<any>;
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
}

export class Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    unpaged: boolean;
    paged: boolean;
}

export class Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

/*
export interface Item {
    itemId: number;
    name: string;
    price: number;
};
*/

/*
export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
};
*/
