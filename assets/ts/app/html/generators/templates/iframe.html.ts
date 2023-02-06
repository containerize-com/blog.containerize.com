export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Url</div>
                <input class="form-control" id="url" placeholder="https://" type="text" value="https://www.example.com/">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input class="form-control" id="name" placeholder="Frame Name" type="text" value="myiFrame">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Width</div>
                <input class="form-control" id="width" type="number" min="1" max="100000" value="400">
                <select id="widthUnit" class="form-select unit-form-select">
                    <option value="%">%</option>
                    <option value="px" selected>px</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Height</div>
                <input class="form-control" id="height" type="number" min="1" max="100000" value="200">
                <select id="heightUnit" class="form-select unit-form-select">
                    <option value="%">%</option>
                    <option value="px" selected>px</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="borders">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Show Borders</div>
            </div>
        </div>
    </div>
    <div id="border-group" class="hidden hidden-animation">
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text minw-120">Border Width</div>
                    <input class="form-control" id="borderWidth" type="number" min="0" max="100" value="1">
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text minw-120">Border Style</div>
                    <select id="borderStyle" class="form-select">
                        <option value="none">none</option>
                        <option value="hidden">hidden</option>
                        <option value="dotted">dotted</option>
                        <option value="dashed">dashed</option>
                        <option value="solid" selected>solid</option>
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
                    <div class="input-group-text minw-120">Border Color</div>
                    <input class="form-control" id="borderColor" type="color" value="#000000">
                </div>
                <div class="col-auto m-auto p-0"></div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="scrollbar">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Scrolling</div>
            </div>
        </div>
    </div>
</div>
`