export const options = `
<div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Type</div>
                <select id="type" class="form-select">
                    <option value="blockquote">blockquote</option>
                    <option value="quote" selected>quote</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row pt-2 hidden hidden-animation" id='for_blockquote'>
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Caption</div>
                <input class="form-control" id="caption" type="text" value="- Aldous Huxley">
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Text</div>
                <textarea class="form-control" id="text" rows="5" placeholder="Your text here">Words can be like X-rays, if you use them properly - they’ll go through anything. You read and you’re pierced.</textarea>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col">
            <div class="input-group">
                <div class="input-group-text">Cite</div>
                <input class="form-control" id="cite" type="text" value="https://www.huxley.net/bnw/four.html">
            </div>
        </div>
    </div>
</div>
`