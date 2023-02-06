export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Source (OGG)</div>
                <input class="form-control" id="source_ogg" type="text" value="./pen-rustle.ogg">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text minw-150">Source (MP3)</div>
                <input class="form-control" id="source_mpeg" type="text" value="./pen-rustle.mp3">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Preload</div>
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