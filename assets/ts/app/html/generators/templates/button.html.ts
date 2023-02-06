export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="button" selected>button</option>
                    <option value="reset">reset</option>
                    <option value="submit">submit</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Text</div>
                <input class="form-control" id="text" placeholder="Text" type="text" value="Click me!">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input class="form-control" id="name" placeholder="Name" type="text" value="myButton">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="disabled">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Disabled</div>
            </div>
        </div>
    </div>
</div>
`