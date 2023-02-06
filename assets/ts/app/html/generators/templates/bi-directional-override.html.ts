export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="ltr">left-to-right</option>
                    <option value="rtl" selected>right-to-left</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Text</div>
                <textarea class="form-control" id="text" placeholder="Your text here">Your text here!</textarea>
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