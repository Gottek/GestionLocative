class Building {
    constructor(id, adress, floor, type, roomNumber, totalArea, roomArea, livingRoomArea, diningRoomArea, rentPrice, flatRateCharges) {
        this.id = id;
        this.adress = adress;
        this.floor = floor;
        this.type = type;
        this.roomNumber = roomNumber;
        this.totalArea = totalArea;
        this.roomArea = roomArea;
        this.livingRoomArea = livingRoomArea;
        this.diningRoomArea = diningRoomArea;
        this.rentPrice = rentPrice;
        this.flatRateCharges = flatRateCharges;
    }
}

export default Building;