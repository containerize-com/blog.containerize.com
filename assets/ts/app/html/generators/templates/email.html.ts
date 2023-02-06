export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input class="form-control" id="name" placeholder="Name" type="text" value="myInput">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Placeholder</div>
                <input class="form-control" id="placeholder" placeholder="your@email.com" type="text" value="your@email.com">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Size</div>
                <input class="form-control" id="size" placeholder="Size" type="number" min="0" max="100" value="30">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="multiple">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Multiple</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="required">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Required</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Pattern</div>
                <input class="form-control" id="pattern" type="text" placeholder="Regular expression" >
            </div>
        </div>
    </div>
</div>
`