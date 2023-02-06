
export class StringBuilder {
    private _lines: string[] = [];

    write(line: string = ""): StringBuilder {
        this._lines.push(line);
        return this;
    }

    writeln(line: string = ""): StringBuilder {
        this._lines.push(line);
        this._lines.push("\n");
        return this;
    }

    indent(level: number = 1, indent: string = '\t'): StringBuilder
    {
        return this.write(indent.repeat(level));
    }

    toString(): string {
        return this._lines.join("");
    }

    isEmpty(): boolean{
        return this._lines.length === 0;
    }
}
