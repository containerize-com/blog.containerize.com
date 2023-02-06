export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="sup" selected>superscript</option>
                    <option value="sub">subscript</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Text</div>
                <textarea class="form-control" id="text" placeholder="Your text here">This is superscript</textarea>
            </div>
        </div>
    </div>
</div>
`