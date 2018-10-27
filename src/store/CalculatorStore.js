import { observable, action, computed } from "mobx";

class CalculatorStore {
    @observable currentOperand = '0';
    @observable operator = null;
    @observable value = 0;
    
    @computed get displayValue() {
        if (this.operator === "="){ return this.value}
        if (this.operator) {
            return (this.value.toString() + this.operator + this.currentOperand)
        }
        return (this.currentOperand)

    }
    @action addNumber=(num)=> {
        if (this.currentOperand.length == 1 && this.currentOperand === '0') {
            this.currentOperand = num.toString();
        }
        else {
            this.currentOperand += num.toString();
        }
    }
    @action changeOperator=(operator)=> {
        this.calcNewValue();
        this.operator = operator;
    }
    calcNewValue=()=> {
        if (this.operator) {
            if (this.operator === "+") { this.value += parseInt(this.currentOperand); }
            if (this.operator === "-") { this.value -= parseInt(this.currentOperand); }
            if (this.operator === "*") { this.value = this.value * parseInt(this.currentOperand); }
            if (this.operator === "/") { this.value = this.value / parseInt(this.currentOperand); }
            
        }
        else { 
            this.value = parseInt(this.currentOperand);
        }
        this.currentOperand = '0';
    }
    @action clear=()=> {
        this.currentOperand = '0';
        this.operator = null;
        this.value = 0;
    }
}

const store = new CalculatorStore();
export default store;