function Postfix() {
    this.value = [];
    this.stack  = [];
    this.processData = () => {
        const input = document.getElementById("input");
        const result = document.getElementById("result");
        let expr = input.value;
        if (expr === "" || typeof (expr) !== "string") { return 0 };
        let array = expr.split(/\s+/);
        let item = null;
        while (item = array.shift()) {
            if (item == +item) { // numeric
                this.stack.push(item);
            } else {
                if (item === 'x') {
                    item = '*';
                }
                var n2 = this.stack.pop(), n1 = this.stack.pop();
                this.stack.push(eval(n1 + item + ' ' + n2));
            }
        }
        this.value.push(this.stack.join(" "));
        if (this.stack.length > 1) {
            result.innerHTML = this.stack.join("<br />")
        } else {
            result.innerHTML = this.stack.pop();
        }
    }
}
const button = document.querySelector("#button");
if (button) {
    const instance = new Postfix();
    button.addEventListener("click", () => {
        instance.processData();
    });
}