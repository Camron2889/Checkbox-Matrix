const CheckMatrix = (function() {
    "use strict";
    const CheckMatrix = function(width = 1, height = 1, parentElement = document.body) {
        this.width = width;
        this.height = height;
        this.parentElement = parentElement;
        this.checkboxes = [];
        
        //append container
        this.container = document.createElement("div");
        const style = this.container.style;
        style.margin = "0";
        style.padding = "1.5px";
        style.display = "inline-block";
        style.lineHeight = "0";
        style.fontSize = "0";
        style.backgroundColor = "#ccc";
        style.border = "1px solid #aaa";
        parentElement.appendChild(this.container);

        this.append();
    };
    
    const proto = CheckMatrix.prototype;
    
    proto.append = function() {
        //clear contents
        const container = this.container;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        this.checkboxes = [];
        
        //append checkboxes
        for (let y = 0; y < this.height; y++) {
            this.checkboxes[y] = [];
            for (let x = 0; x < this.width; x++) {
                const box = document.createElement("input");
                box.setAttribute("type", "checkbox");
                box.style.margin = "0.5px";
                box.style.display = "inline-block";
                container.appendChild(box);
                this.checkboxes[y][x] = box;
            }
            if (y < this.height - 1) {
                const br = document.createElement("br");
                container.appendChild(br);
            }
        }
    };
    
    proto.getData = function() {
        const data = [];

        for (let row = 0; row < this.checkboxes.length; row++) {
            data[row] = [];
            for (let column = 0; column < this.checkboxes[row].length; column++) {
                data[row][column] = (this.checkboxes[row][column].checked) ? 1 : 0;
            }
        }
        
        return data;
    };
    
    return CheckMatrix;
})();