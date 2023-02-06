export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input class="form-control" id="name" placeholder="Name" type="text" value="myTextarea">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Placeholder</div>
                <input class="form-control" id="placeholder" type="text" value="Your message here">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Value</div>
                <input class="form-control" id="value" type="text">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Columns</div>
                <input class="form-control" id="cols" type="number" value="20" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Rows</div>
                <input class="form-control" id="rows" type="number" value="10" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Minimum length</div>
                <input class="form-control" id="min" type="number" value="10" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Maximum length</div>
                <input class="form-control" id="max" type="number" value="500" step="1">
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