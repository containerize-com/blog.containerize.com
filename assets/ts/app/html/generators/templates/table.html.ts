export const options = `
<div>
    <div class="row">
        <div class="col-6 px-1">
            <div class="input-group">
                <div class="input-group-text">Rows</div>
                <input class="form-control" id="rows" placeholder="Rows" type="number" min="1" max="100" value="3">
            </div>
        </div>
        <div class="col-6 px-1">
            <div class="input-group">
                <div class="input-group-text">Cols</div>
                <input class="form-control" id="cols" placeholder="Cols" type="number" min="1" max="100" value="3">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="showHeader">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Show Scrollbar</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Style</div>
                <select id="style" class="form-select">
                    <option value="none">none</option>
                    <option value="hidden">hidden</option>
                    <option value="dotted" selected>dotted</option>
                    <option value="dashed">dashed</option>
                    <option value="solid">solid</option>
                    <option value="double">double</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Border</div>
                <input class="form-control" id="border" type="number" min="0" max="50" value="2">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Color</div>
                <input class="form-control" id="color" type="color" value="#FF0000">
            </div>
            <div class="col-auto m-auto p-0"></div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Width</div>
                <input class="form-control" id="width" type="number" min="1" max="100" value="50">
                <select id="widthUnit" class="form-select unit-form-select">
                    <option value="%" selected>%</option>
                    <option value="px">px</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Align</div>
                <select id="align" class="form-select">
                    <option value="left">left</option>
                    <option value="center" selected>center</option>
                    <option value="right">right</option>
                </select>
            </div>
        </div>
    </div>
</div>
`