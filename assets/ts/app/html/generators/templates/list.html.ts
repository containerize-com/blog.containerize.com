export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="ordered" selected>Ordered List</option>
                    <option value="unordered">Unordered List</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Lines</div>
                <textarea class="form-control" id="text" rows="5">Item 1
Item 2
Item 3</textarea>
            </div>
        </div>
    </div>
</div>
`