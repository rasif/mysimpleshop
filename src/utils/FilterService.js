export default class FilterService {
    static getFilters() {
        const filters = JSON.parse(localStorage.getItem('filter'));
        return filters || {sort: 'latest', size: 'All'};
    }
}