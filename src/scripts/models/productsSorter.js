function ProductsSorter() {
    var sortFunctions = initSortFunctions();

    this.sort = function(data, sortType) {
        var sorter = sortFunctions[sortType];

        if (!$.isFunction(sorter)) {
            throw new Error("Invalid sort type: " + sortType);
        }

        sorter(data);

        return data;
    };

    function initSortFunctions() {
        var sortFunctions = [];
        sortFunctions["1"] = sortByPriceDescending;
        sortFunctions["2"] = sortByPriceAscending;
        sortFunctions["3"] = sortByName;

        return sortFunctions;
    }

    function sortByPriceDescending(data) {
        data.sort(function(a, b) {
            return a.price - b.price;
        });
    }

    function sortByPriceAscending(data) {
        data.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    function sortByName(data) {
        data.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }
}