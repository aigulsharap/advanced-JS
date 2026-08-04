class DB {
    save(items) {
        console.log(`Saved: ${items}`)
    }
}

class MongoDb extends DB {
    save(items) {
        console.log(`Saved MongoDb: ${items}`)
    }
}

class ToDoList {
    items = [1, 2, 3];
    db;

    constructor(db) {
        this.db = db;
    }

    saveToDb() {
        this.db.save(this.items);
    }
}

const list1 = new ToDoList(new DB());
list1.saveToDb();
const list2 = new ToDoList(new MongoDb());
list2.saveToDb();