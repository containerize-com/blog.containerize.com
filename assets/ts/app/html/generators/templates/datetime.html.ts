export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="date" selected>date</option>
                    <option value="datetime-local">datetime-local</option>
                    <option value="month">month</option>
                    <option value="time">time</option>
                    <option value="week">week</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input class="form-control" id="name" placeholder="Name" type="text" value="myDateTime">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Default Value</div>
                <input class="form-control" id="value" placeholder="Value" type="text">
            </div>
        </div>
    </div>
    
</div>
`