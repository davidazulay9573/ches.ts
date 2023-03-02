import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Bishop extends GameTool {
    setsOfMovs() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.location.row - Number(div.id[0]) ==
                this.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.location.row ==
                    this.location.col - Number(div.id[1]));
        });
        filterDivs.forEach((div) => {
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            // div.classList.add("soltsCanMov");
        });
        new Skipping(this.location).skipLimitDiagonal();
    }
}
