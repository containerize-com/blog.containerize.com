export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">URL</div>
                <input class="form-control" id="url" placeholder="Image URL" type="text" value="login-button.png">
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
                <div class="input-group-text">Alt text</div>
                <input class="form-control" id="alt" type="text">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Height</div>
                <input class="form-control" id="height" type="number" min="1" max="100000" value="38">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Width</div>
                <input class="form-control" id="width" type="number" min="1" max="100000" value="115">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="autofocus">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Autofocus</div>
            </div>
        </div>
    </div>
</div>
`