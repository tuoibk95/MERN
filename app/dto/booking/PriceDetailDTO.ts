export default class PriceDetailDTO {
    private id: number;
    private typeCode: string;
    private price: number;

    constructor(){

    }

    getId(){
        return this.id
    }
    setId(id: number){
        this.id = id
    }
    getTypeCoed(){
        return this.typeCode
    }
    setTypeCode(typeCode: string){
        this.typeCode = typeCode
    }
    getPrice(){
        return this.price
    }
    setPrice(price: number){
        this.price = price
    }

}