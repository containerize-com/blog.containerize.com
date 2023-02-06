export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Source (MP4)</div>
                <input class="form-control" id="source" type="text" value="./zoo.mp4">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Preload</div>
                <select id="preload" class="form-select">
                    <option value="auto" selected>auto</option>
                    <option value="none">none</option>
                    <option value="metadata">metadata</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Width</div>
                <input class="form-control" id="width" type="number" min="1" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-120">Height</div>
                <input class="form-control" id="height" type="number" min="1" step="1">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="autoplay">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Autoplay</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="controls" checked>
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Controls</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="loop">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Loop</div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <label class="switch">
                    <input type="checkbox" id="muted">
                    <span class="slider round"></span>
                </label>
                <div class="input-group-label">Muted</div>
            </div>
        </div>
    </div>
</div>
`