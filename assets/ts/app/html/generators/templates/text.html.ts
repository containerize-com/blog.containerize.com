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
                <input class="form-control" id="placeholder" type="text">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Size</div>
                <input class="form-control" id="size" type="number" value="20" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="spellcheck">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Spellcheck</div>
            </div>
        </div>
    </div>
</div>
`