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
        <div class="col ">
            <div class="input-group">
                <div class="input-group-text minw-150">Min Length</div>
                <input class="form-control" id="minlength" type="number" value="8" step="1" min='0'>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Placeholder</div>
                <input class="form-control" id="placeholder" type="text">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Size</div>
                <input class="form-control" id="size" type="number" value="20" step="1">
            </div>
        </div>
    </div>
</div>
`