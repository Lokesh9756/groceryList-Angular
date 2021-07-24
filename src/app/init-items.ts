export class Init {
    load() {
        if (localStorage.getItem('items') === null || localStorage.getItem('items') == undefined) {
            console.log('No Todos Found... Creating...');
            let items = [
                {
                    id: 0,
                    name: "",
                    unit: 0,
                    price: 0,
                    total: 0,
                    grandtotal: 0

                }
            ]

            localStorage.setItem('items', JSON.stringify(items));
            return
        } else {
            console.log('Found Todos...');
        }
    }
}