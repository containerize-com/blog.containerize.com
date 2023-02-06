import { LiveExampleWidget } from "../LiveExampleWidget";

export type generator = 
{
    table(placeholderId: string): LiveExampleWidget
    iframe(placeholderId: string): LiveExampleWidget
    button(placeholderId: string): LiveExampleWidget
    checkbox(placeholderId: string): LiveExampleWidget
    radio(placeholderId: string): LiveExampleWidget
    color(placeholderId: string): LiveExampleWidget
    datetime(placeholderId: string): LiveExampleWidget
    email(placeholderId: string): LiveExampleWidget
    file(placeholderId: string): LiveExampleWidget
    imageinput(placeholderId: string): LiveExampleWidget
    number(placeholderId: string): LiveExampleWidget
    password(placeholderId: string): LiveExampleWidget
    range(placeholderId: string): LiveExampleWidget
    search(placeholderId: string): LiveExampleWidget
    submit(placeholderId: string): LiveExampleWidget
    telephone(placeholderId: string): LiveExampleWidget
    text(placeholderId: string): LiveExampleWidget
    textarea(placeholderId: string): LiveExampleWidget
    urlinput(placeholderId: string): LiveExampleWidget
    audio(placeholderId: string): LiveExampleWidget
    image(placeholderId: string): LiveExampleWidget
    video(placeholderId: string): LiveExampleWidget
    bidirectionaloverride(placeholderId: string): LiveExampleWidget
    strong(placeholderId: string): LiveExampleWidget
    cite(placeholderId: string): LiveExampleWidget
    code(placeholderId: string): LiveExampleWidget
    emphasize(placeholderId: string): LiveExampleWidget
    mark(placeholderId: string): LiveExampleWidget
    quoteblockquote(placeholderId: string): LiveExampleWidget
    strikethrough(placeholderId: string): LiveExampleWidget
    superscriptsubscript(placeholderId: string): LiveExampleWidget
    unarticulated(placeholderId: string): LiveExampleWidget
    details(placeholderId: string): LiveExampleWidget
    dialog(placeholderId: string): LiveExampleWidget
    hyperlink(placeholderId: string): LiveExampleWidget
    meter(placeholderId: string): LiveExampleWidget
    progress(placeholderId: string): LiveExampleWidget
    list(placeholderId: string): LiveExampleWidget
}