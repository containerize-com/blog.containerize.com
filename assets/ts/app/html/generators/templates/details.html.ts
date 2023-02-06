export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Summary</div>
                <input class="form-control" id="summary" type="text" value="Details">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Text</div>
                <textarea class="form-control" id="text" rows="5" placeholder="Your text here">Something small enough to escape casual notice.</textarea>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="open">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Open by Default</div>
            </div>
        </div>
    </div>
</div>
`