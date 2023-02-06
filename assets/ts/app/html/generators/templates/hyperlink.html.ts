export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="mailto" selected>mailto</option>
                    <option value="tel">tel</option>
                    <option value="url">url</option>
                </select>
            </div>
        </div>
    </div>

    <div id="for_mailto" class="hidden-animation">
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Email</div>
                    <input class="form-control" id="email_address" type="text" value="someone@example.com">
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Text</div>
                    <input class="form-control" id="email_text" type="text" value="Click here!">
                </div>
            </div>
        </div>
    </div>
    
    <div id="for_tel" class="hidden hidden-animation">
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Telephone</div>
                    <input class="form-control" id="tel_address" type="text" value="+1 555-555-5555">
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Text</div>
                    <input class="form-control" id="tel_text" type="text" value="Click here!">
                </div>
            </div>
        </div>
    </div>

    <div id="for_url" class="hidden hidden-animation">
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Type</div>
                    <select id="url_target" class="form-select">
                        <option value="_blank" selected>_blank</option>
                        <option value="_parent">_parent</option>
                        <option value="_self">_self</option>
                        <option value="_top">_top</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">URL</div>
                    <input class="form-control" id="url_address" type="text" value="http://aspose.com">
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-text">Text</div>
                    <input class="form-control" id="url_text" type="text" value="Click here!">
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <label class="switch">
                        <input type="checkbox" id="download">
                        <span class="slider round"></span>
                    </label>
                    <div class="input-group-label">Download</div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <label class="switch">
                        <input type="checkbox" id="nofollow">
                        <span class="slider round"></span>
                    </label>
                    <div class="input-group-label">Do not endorse (nofollow)</div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <label class="switch">
                        <input type="checkbox" id="noreferrer">
                        <span class="slider round"></span>
                    </label>
                    <div class="input-group-label">Do not send referrer info</div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <label class="switch">
                        <input type="checkbox" id="external">
                        <span class="slider round"></span>
                    </label>
                    <div class="input-group-label">External link</div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col">
                <div class="input-group">
                    <label class="switch">
                        <input type="checkbox" id="help">
                        <span class="slider round"></span>
                    </label>
                    <div class="input-group-label">Help link</div>
                </div>
            </div>
        </div>
    </div>
</div>
`