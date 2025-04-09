let vendor = {
    Pos: {X:70, Y:70},
    Health: 100,
    Inventory: [
        {Name:"Cheese", Price:45},
        {Name:null, Price:null},
        {Name:"Vodka", Price:187},
        {Name:"Suicidal dragon", Price:300}],

    IsDead: function() {
        return this.Health <= 0;
    },

    HasItem: function(name) {
        return this.Inventory.find(item => item.Name == name) ? true : false;
    }
};

for (property in vendor) {
    console.log(vendor[property]);
}